import React, {useContext} from "react";
import { NotesContext } from "../../contexts/NotesContext";
import NoteCard from "./NoteCard";
import { StyledNoteList } from "./style";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <StyledNoteList>
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </StyledNoteList>
  );
};

export default NoteList;
