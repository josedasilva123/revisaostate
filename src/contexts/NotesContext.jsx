import { useState, createContext } from "react";
import { toast } from "react-toastify"

export const NotesContext = createContext({});

export const NotesProvider = ({ children }) => {
  const noteList = [
    {
      id: 0,
      title: "Nota 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
    },
    {
      id: 1,
      title: "Nota 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
    },
    {
      id: 2,
      title: "Nota 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
    },
  ];

  const [notes, setNotes] = useState(noteList);
  const [currentNote, setCurrentNote] = useState(null); //Estado para conter a nota seleciona (nota que será editada)
  const [counter, setCounter] = useState(noteList.length);

  function createNote(formData) {
    const newNote = {
      id: counter,
      title: formData.title,
      text: formData.text,
    };

    setNotes([...notes, newNote]);

    setCounter(counter + 1);
    toast.success('Nota adicionada com sucesso!')
  }

  function removeNote(id) {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
    toast.success('Nota removida com sucesso!')
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
