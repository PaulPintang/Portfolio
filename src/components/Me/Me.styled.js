import styled from "styled-components";
import { Button } from "../styles/Reusable.styled";
export const Section = styled.section`
  animation: fadeIn linear 1.1s;
  -webkit-animation: fadeIn linear 1.1s;
  -moz-animation: fadeIn linear 1.1s;
  -o-animation: fadeIn linear 1.1s;
  -ms-animation: fadeIn linear 1.1s;
  height: calc(100vh - 130px);
`;

export const TextAnimated = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  opacity: 1;
  font-weight: 500;

  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: reveal 1800ms ease-in-out forwards 260ms,
    glow 2600ms linear infinite 2100ms;

  /* Animations */
  @keyframes reveal {
    80% {
      letter-spacing: 8px;
    }
    100% {
      background-size: 300% 300%;
    }
  }
  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  }
`;

export const BtnControl = styled.div`
  padding: 10px;
  .check-btn {
    background: transparent;
    color: white;
    border: 1px solid #ffffff;
    a:hover {
      color: black;
    }
  }
`;

export const StyledButton = styled(Button)`
  font-family: "Poppins", sans-serif;
  padding: 8px 18px;
  margin: 8px;
  background-color:  ${({ red }) => (red ? "#f3f3f3" : "transparent")}};
  color: ${({ red }) => (red ? "gray" : "white")}};
  font-size: 10px;
  width: 151px;
  &:hover {
    background-color: ${({ red }) => (red ? "#fd0037" : "white")}};
  }
  &:hover {
    color: ${({ red }) => (red ? "white" : "gray")}};
  }
  &:hover {
    border:  ${({ red }) => (red ? "1px solid #fd0037" : "")}};
  }
`;
