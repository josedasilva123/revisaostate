import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes,  handleRemove, selectNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} handleRemove={handleRemove} selectNote={selectNote} />
      ))}
    </div>
  );
};

export default NoteList;
