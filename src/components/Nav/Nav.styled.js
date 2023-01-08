import styled from "styled-components";

export const NavLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 48px;

  a {
    display: block;
    padding: 0.5rem 1rem;
  }

  div {
    display: flex;
    align-items: center;

    button {
      padding: 0.5rem 1rem;
      color: red;
      cursor: pointer;
    }
  }
`;
