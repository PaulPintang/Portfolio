import styled from "styled-components";

export const Section = styled.section`
  animation: fadeIn linear 1.1s;
  -webkit-animation: fadeIn linear 1.1s;
  -moz-animation: fadeIn linear 1.1s;
  -o-animation: fadeIn linear 1.1s;
  -ms-animation: fadeIn linear 1.1s;

  .flex {
    justify-content: center;
    flex-direction: column;
    h1 {
      font-size: 4.2rem;
      font-variant: small-caps;
      font-weight: 200;
      letter-spacing: 4px;
    }

    .my-name {
      font-weight: 700;
    }
  }
`;

export const Container = styled.div`
  height: calc(100vh - 120px);
  margin-top: 110px;
`;

export const TextAnimated = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 2.5px;

  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: reveal 1800ms ease-in-out forwards 260ms,
    glow 2600ms linear infinite 2100ms;

  opacity: 1;
  font-weight: 500;
`;

export const BtnControl = styled.div`
  padding: 10px;
`;

export const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  padding: 7px 18px;
  margin: 8px;
  border: none;
  background: rgb(208, 204, 204);
  font-size: 10px;
  width: 151px;
  font-weight: 200;

  .tp {
    background: transparent;
    color: white;
    border: 1px solid #ffffff;
  }
`;
