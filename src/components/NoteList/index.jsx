import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, handleRemove }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default NoteList;
