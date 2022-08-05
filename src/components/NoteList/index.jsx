import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, handleRemove, setCurrentNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} handleRemove={handleRemove} setCurrentNote={setCurrentNote} />
      ))}
    </div>
  );
};

export default NoteList;
