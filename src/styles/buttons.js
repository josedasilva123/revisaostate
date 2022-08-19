import styled, {css} from "styled-components";
import BaseButton from "./components/button";

export const Button = styled(BaseButton)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-weight: 600;
    border-radius: 4px;

    padding: 2rem 0;
    height: 48px;

    background: var(--green);
    color: var(--white);

    transition: .3s;

    &:hover{
        filter: brightness(1.1);
    }

    &::disabled{
        cursor: not-allowed;
        opacity: .5;
    }
`