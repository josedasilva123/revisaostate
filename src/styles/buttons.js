import styled, {css} from "styled-components";
import BaseButton from "./components/button";

export const Button = styled(BaseButton)`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    font-weight: 600;
    border-radius: 4px;

    padding: 0 2rem;
    height: 48px;

    

    transition: .3s;

    ${({outline}) => {
        switch(outline){
            case true:
                return css`
                    background: transparent;
                    border: 1px solid var(--green);
                    color: var(--green);
                    &:hover{
                        background: var(--green);
                        color: var(--white);
                    }
                `
            default:    
                return css`
                    background: var(--green);
                    color: var(--white);
                `
        }
    }}

    &:hover{
        filter: brightness(1.1);
    }

    &::disabled{
        cursor: not-allowed;
        opacity: .5;
    }
`