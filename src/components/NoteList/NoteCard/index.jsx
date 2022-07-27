import React from "react";

const NoteCard = ({note, handleRemove}) => {
  return (
    <li key={note.id}>
      <span>{note.category}</span>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <button onClick={() => handleRemove(note.id)}>Remover</button>
    </li>
  );
};

export default NoteCard;
