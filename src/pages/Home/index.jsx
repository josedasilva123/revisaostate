import React, { useContext } from "react";
import EditForm from "../../components/EditForm";
import NoteForm from "../../components/NoteForm";
import NoteList from "../../components/NoteList";
import { NotesContext } from "../../contexts/NotesContext";
import { Container } from "../../styles/global";
import { StyledPageHome } from "./style";

const PageHome = () => {
  const { currentNote } = useContext(NotesContext);
  return (
    <StyledPageHome>
      {currentNote && <EditForm />}
      <Container>
        <div className="flex-grid">
          <div className="left">
            <NoteForm />
          </div>
          
          <div className="right">
            <NoteList />  
          </div>                  
        </div>
      </Container>
    </StyledPageHome>
  );
};

export default PageHome;
