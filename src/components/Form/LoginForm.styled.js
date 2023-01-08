import styled from "styled-components";

export const Form = styled.form`
  max-width: 400px;
  width: 100%;
  fieldset {
    display: grid;
    gap: 1rem;
  }

  label {
    font-weight: 300;
  }

  input {
    width: 100%;
    /* height: 40px; */
    padding: 0.5rem;
    border: 1px solid black;
    line-height: 22px;
  }
`;

export const Submit = styled.button`
  position: relative;
  padding: 12px 1rem;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 -1px 0 var(--white) inset;
  width: 100%;
  background: var(--white);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--white);
    mix-blend-mode: difference;

    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: translateY(0);
  }

  &.active::before {
    transform: translateY(0);
    cursor: auto;
  }
`;
