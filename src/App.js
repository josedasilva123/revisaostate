import "./App.css";

import { useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

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
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  }); 
  const [counter, setCounter] = useState(noteList.length); 

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.title === "" || formData.text === "") {
      alert("Preencha os campos antes de enviar");
    } else {
      const newNote = {
        id: counter,
        title: formData.title,
        text: formData.text,
      };
      
      setNotes([...notes, newNote]);

      setCounter(counter + 1);

      setFormData({
        title: "",
        text: "",
      });
    }
  }

  function handleRemove(id){
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
  }

  return (
    <div className="App">
      <NoteList notes={notes} handleRemove={handleRemove} />
      <NoteForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />      
    </div>
  );
}

export default App;
