/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import EditForm from "../../components/EditForm";
import NoteForm from "../../components/NoteForm";
import NoteList from "../../components/NoteList";
import { NotesContext } from "../../contexts/NotesContext";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../styles/global";
import { StyledPageHome } from "./style";
import { useNavigate } from "react-router-dom";

const PageHome = () => {
  const { user } = useContext(UserContext);
  const { currentNote } = useContext(NotesContext);

  return (
    <StyledPageHome>
      
      {currentNote && <EditForm />}
      <Container>
        <div className="userBox">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
        
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
