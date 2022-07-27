import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, filterNotes, handleRemove }) => {
  return (
    <div>
      {(filterNotes.length > 0 ? filterNotes : notes).map((note) => (
        <NoteCard key={note.id} note={note} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default NoteList;
