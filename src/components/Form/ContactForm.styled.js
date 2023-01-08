import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 300;
`;

export const Input = styled.input`
  width: 100%;
  /* height: 40px; */
  padding: 0.5rem;
  border: 1px solid black;
  line-height: 22px;
`;

export const Select = styled.select`
  display: flex;

  option {
    flex: 1;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid black;
  resize: vertical;
`;

export const Button = styled.button`
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

export const Message = styled.span`
  color: red;
`;
