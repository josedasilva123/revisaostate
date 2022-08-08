import React from "react";

const NoteCard = ({note, removeNote, setCurrentNote}) => {
  return (
    <li key={note.id}>
      <h2>{note.title}</h2>
      <p>{note.text}</p>
      <button onClick={() => removeNote(note.id)}>Remover</button>
      <button onClick={() => setCurrentNote(note)}>Editar</button>
    </li>
  );
};

export default NoteCard;
