import React, {useContext} from "react";
import { NotesContext } from "../../../contexts/NotesContext";

const NoteCard = ({note}) => {
  const { removeNote, setCurrentNote } = useContext(NotesContext);

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
