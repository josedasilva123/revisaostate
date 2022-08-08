import React, { useContext } from "react";
import { NotesContext } from "../../contexts/NotesContext";
import NoteCard from "./NoteCard";

const NoteList = () => {
  /* Import */
  const { notes, removeNote, setCurrentNote } = useContext(NotesContext);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} removeNote={removeNote} setCurrentNote={setCurrentNote} />
      ))}
    </div>
  );
};

export default NoteList;
