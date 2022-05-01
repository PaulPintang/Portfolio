import styled from "styled-components";
import { Links, Flex } from "../styles/Reusable.styled";

export const Header = styled.header`
  background-color: #0e1625;
  height: ${({ navHeight }) => (navHeight ? "66px" : "110px")};
  height: ${({ click }) => (click ? "100vh" : "")};

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  transition: height 0.4s ease;
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
    display: ${({ click }) => (!click ? "none" : "")};
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
    height: ${({ click }) => (click ? "100vh" : "")};
    justify-content: ${({ click }) => (click ? "center" : "space-between")};
    transition: height 0.4s ease;
  }
`;

export const Logo = styled.div`
  a {
    font-size: 11px;
    letter-spacing: 3px;
    color: white;
  }
`;

export const Close = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  svg {
    font-size: 25px;
    color: rgb(199, 194, 194);
  }
`;
