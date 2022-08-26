import styled from "styled-components";

export const StyledPageHome = styled.main`
  .userBox {
    padding: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }
  .flex-grid {
    display: flex;
    gap: 3rem;
    .left {
      width: 100%;
      max-width: 400px;
    }
    .right {
      width: 100%;
    }

    @media (max-width: 900px) {
      align-items: center;
      flex-direction: column;
    }
  }
`;
