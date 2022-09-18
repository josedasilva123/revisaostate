import React, {useContext} from "react";
import { INote, NotesContext } from "../../../contexts/NotesContext";
import { StyledNoteCard } from "./style";
import { MdDelete, MdEdit} from "react-icons/md";

interface INoteCardsProps{
  note: INote;
}

const NoteCard = ({note}: INoteCardsProps) => {
  const { removeNote, setCurrentNote } = useContext(NotesContext);

  return (
    <StyledNoteCard>
      <div className="content">
        <h2>{note.title}</h2>
        <p>{note.text}</p>
      </div>
      <div className="controls">
      <button onClick={() => removeNote(note._id)} className="delete">
        <MdDelete size={24} />
      </button>
      <button onClick={() => setCurrentNote(note)} className="edit">
        <MdEdit size={24} />
      </button>
      </div>      
    </StyledNoteCard>
  );
};

export default NoteCard;
