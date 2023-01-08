import styled from "styled-components";
const Message = styled.div`
  color: red;
`;

export default function ValidationError({ children }) {
  return <Message>{children}</Message>;
}
