import styled from "styled-components";
import { Links, Flex } from "../styles/Reusable.styled";

export const Header = styled.header`
  background-color: #0e1625;
  height: ${({ navHeight }) => (navHeight ? "66px" : "110px")};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: height 0.4s ease;
  /* height: ${({ showNav }) => (showNav ? "100vh" : "66px")}; */
  box-shadow: ${({ navHeight }) =>
    navHeight ? "0 2px 4px -1px rgba(0, 0, 0, 0.25)" : ""};

  a {
    text-decoration: none;
    color: white;
    h1 {
      font-size: 22px;
    }
  }
`;

export const NavLinks = styled(Links)`
  @media (max-width: 768px) {
    /* display: ; */
    flex-direction: ${({ showNav }) => (showNav ? "column" : "")};
    li {
      a {
        font-size: 35px;
      }
    }
  }
`;

export const NavBar = styled(Flex)`
  @media (max-width: 768px) {
    height: ${({ showNav }) => (showNav ? "100vh" : "")};
    /* justify-content: ${({ showNav }) =>
      showNav ? "space-between" : "center"}; */
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  a {
    font-size: 11px;
    letter-spacing: 3px;
    color: white;
  }
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const Close = styled.div`
  /* display: none;
  position: fixed;
  top: 30px;
  right: 30px; */
  svg {
    font-size: 28px;
    color: white;
  }
  @media (max-width: 768px) {
    display: unset;
  }
`;
