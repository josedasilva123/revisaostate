import { AxiosError } from "axios";
import React, { useState, useEffect, createContext, useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify"
import { api } from "../api/api";
import { UserContext } from "./UserContext";

export interface IFormCreateNote{
  title: string;
  text: string;
}

export interface IFormEditNote{
  title: string;
  text: string;
}

export interface INote{
  _id: string;
  userID: string;
  title: string;
  text:  string;
  createdAt: string;
  updatedAt: string; 
  __v: number;
}

interface INotesContext{
  notes: INote[];
  currentNote: INote | null;
  setCurrentNote: React.Dispatch<React.SetStateAction<INote | null>>;
  createNote: (formData: IFormCreateNote, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  removeNote: (id: string) => void;
  editNote: SubmitHandler<IFormEditNote>;
}

interface INotesProps{
  children: React.ReactNode;
}

interface IError{
  error: string;
}

export const NotesContext = createContext<INotesContext>({} as INotesContext);

export const NotesProvider = ({ children }: INotesProps) => { 
  const { user } = useContext(UserContext);
  const [notes, setNotes] = useState<INote[]>([] as INote[]);
  const [currentNote, setCurrentNote] = useState<INote | null>(null); 

  //Nesta api é necessário uma requisição
  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');

    async function getNotes(){
      try {        
        const response = await api.get('notes', {
          headers: {
            auth: token as string,
          }
        })        
        setNotes(response.data.response);
      } catch (error) {
        console.log(error);
      }
    }

    //Executa função somente com usuário válido e token
    if(user && token){
      getNotes();
    } else {
      //Do contrario limpa notas
      setNotes([]);
    }     

  }, [user]);

  async function createNote(formData: IFormCreateNote, setLoading: React.Dispatch<React.SetStateAction<boolean>>){
    try {
      setLoading(true);
      const token = localStorage.getItem('@TOKEN');
      const response = await api.post('notes', formData, {
        headers: {
          auth: token as string,
        }
      })
      //Mesmo com a requisição a renderização na interface 
      setNotes([...notes, response.data.response]); 
      toast.success(response.data.message);
    } catch (error) {
      const serverError = error as AxiosError<IError>;
      toast.error(serverError.response?.data.error);
    } finally {
      setLoading(false);
    }
  }

  async function removeNote(id: string) {
    try {
      const token = localStorage.getItem('@TOKEN');
      const response = await api.delete(`notes/${id}`, {
        headers: {
          auth: token as string,
        }
      })
      toast.success(response.data.message);
      const newList = notes.filter((note) => note._id !== id);
      setNotes(newList);
    } catch (error) {
      const serverError = error as AxiosError<IError>;
      toast.error(serverError.response?.data.error);
    }
    /*
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
    toast.success('Nota removida com sucesso!')
    */
  }
  
  const editNote: SubmitHandler<IFormEditNote> = (formData) => {
    const noteIndex = notes.indexOf(currentNote as INote);
    
    const newNotes = [...notes];
    
    newNotes[noteIndex].text = formData.text;
    
    setNotes(newNotes);    
    setCurrentNote(null);
    toast.success('Nota alterada com sucesso!')
  }

  /* Export */
  return (
    <NotesContext.Provider value={{ notes, currentNote, setCurrentNote, createNote, removeNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};
