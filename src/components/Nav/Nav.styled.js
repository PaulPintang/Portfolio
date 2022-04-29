import styled from "styled-components";

export const Header = styled.header`
  background-color: #0e1625;
  height: 110px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;

  max-width: 1100px;
  margin: auto;
  padding: 0 25px;

  animation: fadeIn linear 0.5s;
  -webkit-animation: fadeIn linear 0.5s;
  -moz-animation: fadeIn linear 0.5s;
  -o-animation: fadeIn linear 0.5s;
  -ms-animation: fadeIn linear 0.5s;

  a {
    text-decoration: none;
    h1 {
      font-size: 22px;
    }
  }
`;

export const Logo = styled.div`
  a {
    font-size: 11px;
    letter-spacing: 3px;
    color: white;
  }
`;
