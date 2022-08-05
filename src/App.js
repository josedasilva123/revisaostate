import "./App.css";

import { useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import EditForm from "./components/EditForm";

function App() {
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

  function submit(formData) {
      const newNote = {
        id: counter,
        title: formData.title,
        text: formData.text,
      };
     
      setNotes([...notes, newNote]);
      
      setCounter(counter + 1);    
  }

  
  function handleRemove(id){    
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList); 
  }

  return (
    <div className="App">
      { /* Renderização condicional para exibir componente de edição */}
      {currentNote ? (
        <EditForm currentNote={currentNote} setCurrentNote={setCurrentNote} notes={notes} setNotes={setNotes} />
      ) : (
        <>
          <NoteList notes={notes} handleRemove={handleRemove} setCurrentNote={setCurrentNote} />
          <NoteForm submit={submit} />  
        </>
      )}          
    </div>
  );
}

export default App;
