import styled from "styled-components";

export const EditModal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,.45);

    .content{
        position: relative;
        padding: 3rem;
        width: 100%;
        max-width: 600px;
        background: #ffffff;
        .close{
            cursor: pointer;
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: transparent;
            border : none;
            opacity: .5;
            transition: .4s;
            &:hover{
                opacity: 1;
            }
        }
    }
`