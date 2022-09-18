import React, {useContext} from "react";
import { NotesContext } from "../../contexts/NotesContext";
import NoteCard from "./NoteCard";
import { StyledNoteList } from "./style";

const NoteList = () => {
  const { notes } = useContext(NotesContext);
  return (
    <StyledNoteList>
      {notes.length ? notes?.map((note) => (
        <NoteCard key={note._id} note={note} />
      )) : (
        <h1>Nenhuma nota cadastrada. Cadastre uma nova nota</h1>
      )}
    </StyledNoteList>
  );
};

export default NoteList;
