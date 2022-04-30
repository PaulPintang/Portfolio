import styled from "styled-components";
import { Links, Flex } from "../styles/Reusable.styled";

export const Header = styled.header`
  background-color: #0e1625;
  height: 110px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: height 0.4s ease;

  /* animation: fadeIn linear 0.5s;
  -webkit-animation: fadeIn linear 0.5s;
  -moz-animation: fadeIn linear 0.5s;
  -o-animation: fadeIn linear 0.5s;
  -ms-animation: fadeIn linear 0.5s; */

  a {
    text-decoration: none;
    h1 {
      font-size: 22px;
    }
  }
`;

export const NavLinks = styled(Links)`
  @media (max-width: 768px) {
    /* display: ; */
    flex-direction: column;
    li {
      a {
        font-size: 35px;
      }
    }
  }
`;

export const NavBar = styled(Flex)`
  @media (max-width: 768px) {
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  a {
    font-size: 11px;
    letter-spacing: 3px;
    color: white;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
