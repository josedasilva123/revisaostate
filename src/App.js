import "./App.css";

import { useState, useEffect } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const noteList = [
    {
      id: 0,
      title: "Nota 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
      category: "recados"
    },
    {
      id: 1,
      title: "Nota 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
      category: "tarefas"
    },
    {
      id: 2,
      title: "Nota 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in placerat orci. Vestibulum sit amet dapibus elit. Nullam bibendum nulla in ex elementum convallis.",
      category: "anotacoes"
    },
  ];

 

  const [notes, setNotes] = useState(noteList); 
  const [filterNotes, setFilterNotes] = useState([]);
  const [filter, setFilter] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    category: "tarefas"
  }); 

  const [counter, setCounter] = useState(noteList.length); 

  useEffect(() => {
    const newFilter = notes.filter((note) => note.category === filter);
    setFilterNotes(newFilter);
  }, [filter, notes]);

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.title === "" || formData.text === "") {
      alert("Preencha os campos antes de enviar");
    } else {
      const newNote = {
        id: counter,
        title: formData.title,
        text: formData.text,
        category: formData.category
      };
      
      setNotes([...notes, newNote]);

      setCounter(counter + 1);
      
      setFormData({
        title: "",
        text: "",
        category: "tarefas",
      });
    }
  }

  function handleRemove(id){
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList); 
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => setFilter("")}>Filtrar</button>        
        <button onClick={() => setFilter("tarefas")}>Tarefas</button>
        <button onClick={() => setFilter("recados")}>Recados</button>
        <button onClick={() => setFilter("anotacoes")}>Anotações</button>
      </div>
      <NoteList notes={notes} filterNotes={filterNotes} handleRemove={handleRemove} />
      <NoteForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} />      
    </div>
  );
}

export default App;
