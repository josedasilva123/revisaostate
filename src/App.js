import "./App.css";

import { useContext, useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import EditForm from "./components/EditForm";
import { NotesContext } from "./contexts/NotesContext";

function App() {  
  const {currentNote} = useContext(NotesContext);
  return (
    <div className="App">
      {currentNote ? (
        <EditForm  />
      ) : (
        <>
          <NoteList />
          <NoteForm />  
        </>
      )}          
    </div>
  );
}

export default App;
