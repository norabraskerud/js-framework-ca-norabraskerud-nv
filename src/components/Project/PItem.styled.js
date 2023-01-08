import styled from "styled-components";
import { Link as L } from "react-router-dom";

export const Item = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 1/1;
  transition: 0.3s;
  box-shadow: 0 4px 8px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;

  img {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    transition: transform 0.3s ease;
  }

  :hover img {
    transform: scale(1.05);
  }

  :hover a {
    opacity: 1;
    visibility: visible;
  }

  h4 {
    position: relative;
    overflow: hidden;
    line-height: 40px;
    padding: 0 1rem;
    background: var(--white);

    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--white);
      transform: translateY(calc(100% - 1px));
      mix-blend-mode: difference;
      transition: transform 0.3s ease;
    }
  }
`;

export const Link = styled(L)`
  text-align: center;
  padding: 0.5rem;
  transition: 0.3s ease;
  opacity: 0;
  visibility: hidden;

  :hover h4::before {
    transform: translateY(0);
  }
`;
