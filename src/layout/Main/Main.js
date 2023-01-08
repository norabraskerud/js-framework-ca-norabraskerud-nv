import { Container, Wrapper } from "./Main.styled";

export default function Main({ children }) {
  return (
    <main>
      <Container>
        <Wrapper>{children}</Wrapper>
      </Container>
    </main>
  );
}
