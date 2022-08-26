import styled from "styled-components";

export const StyledNoteCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    padding: 2rem;

    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;

    h2{
        margin-bottom: 1rem;
    }

    .controls{
        display: flex;
        gap: 2rem;
    }
    @media (max-width: 500px){
        flex-direction: column;
    }
`