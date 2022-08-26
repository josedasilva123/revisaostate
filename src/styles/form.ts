import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .errors{
        margin-top: -.7rem;
        color: red;
    }
`

export const FormInput = styled.input`
    border: none;
    border-bottom: 2px solid var(--black);
    padding: 0 1.5rem;
    height: 48px;
    background: var(--gray);

    &::disabled{
        opacity: .5;
    }
`

export const FormTextarea = styled.textarea`
    font-family: Arial, Helvetica, sans-serif;

    width: 100%;
    max-width: 100%;
    min-width: 100%;    

    border: none;
    border-bottom: 2px solid var(--black);

    padding: 1.5rem;

    height: 150px;
    background: var(--gray);  
`