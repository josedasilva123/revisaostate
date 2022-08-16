import React, {useContext} from "react";
import { NotesContext } from "../../contexts/NotesContext";
import NoteCard from "./NoteCard";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <div>
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
