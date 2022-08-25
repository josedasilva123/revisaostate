import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root{
        --black: #000000;
        --white: #ffffff;
        --green: #30bb5f;
        --gray: #fbfbfb;
    }
    button{
        cursor: pointer;
        border: transparent;
        background: none;
    }
    a{
        text-decoration: none;
    }
    ul, ol{
        list-style: none;
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 1rem;

    ${({small}) => {
        if(small){
            return css`
                max-width: 750px;
            `   
        }
        
    }}

`