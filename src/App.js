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
  const [counter, setCounter] = useState(noteList.length);
  const [currentNote, setCurrentNote] = useState(null);

  function submit(formData) {
    const newNote = {
      id: counter,
      title: formData.title,
      text: formData.text,
    };

    setNotes([...notes, newNote]);
    setCounter(counter + 1);
  }

  function handleRemove(id) {
    const newList = notes.filter((note) => note.id !== id);
    setNotes(newList);
  }

  function selectNote(note) {
    setCurrentNote(note);
  }

  return (
    <div className="App">
      {currentNote ? (
        <EditForm
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          notes={notes}
          setNotes={setNotes}
        />
      ) : (
        <>
          <NoteList
            notes={notes}
            handleRemove={handleRemove}
            selectNote={selectNote}
          />
          <NoteForm submit={submit} />
        </>
      )}
    </div>
  );
}

export default App;
