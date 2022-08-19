import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-toastify"
import { api } from "../api/api";
import { UserContext } from "./UserContext";

export const NotesContext = createContext({});

export const NotesProvider = ({ children }) => { 
  const { user } = useContext(UserContext);
  const [notes, setNotes] = useState();
  const [currentNote, setCurrentNote] = useState(null); 

  //Nesta api é necessário uma requisição
  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');

    async function getNotes(){
      try {        
        const response = await api.get('notes', {
          headers: {
            auth: token,
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

  async function createNote(formData, setLoading){
    try {
      setLoading(true);
      const token = localStorage.getItem('@TOKEN');
      const response = await api.post('notes', formData, {
        headers: {
          auth: token
        }
      })
      //Mesmo com a requisição a renderização na interface 
      setNotes([...notes, response.data.response]);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  }

  async function removeNote(id) {
    try {
      const token = localStorage.getItem('@TOKEN');
      const response = await api.delete(`notes/${id}`, {
        headers: {
          auth: token,
        }
      })
      toast.success(response.data.message);
      const newList = notes.filter((note) => note._id !== id);
      setNotes(newList);
    } catch (error) {
      toast.error(error.response.data.error);  
    }
    /*
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
    toast.success('Nota removida com sucesso!')
    */
  }
  
  function editNote(formData){
    const noteIndex = notes.indexOf(currentNote);
    
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
