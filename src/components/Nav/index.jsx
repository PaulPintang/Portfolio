import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { Flex, Span, Button, ToggleNav } from "../styles/Reusable.styled";
import { Logo, Header, NavLinks, NavBar } from "./Nav.styled";
const Nav = () => {
  const [navHeight, setNavHeight] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 2) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  });

  return (
    <Header className={navHeight ? "shrink" : ""}>
      <NavBar contain>
        <Logo>
          <a href="https://paulpintang.netlify.app/" rel="noreferrer">
            <h1>
              <Span>P</Span>IN<Span>.</Span>
            </h1>
          </a>
        </Logo>
        <NavLinks>
          <li>
            <a href="#services">
              <Span>S</Span>
              ervices
            </a>
          </li>
          <li>
            <a href="#projects">
              <Span>P</Span>
              rojects
            </a>
          </li>
          <li>
            <a href="#contacts">
              <Span>C</Span>
              ontacts
            </a>
          </li>
          {/* <li>
            <a href="https://github.com/PaulPintang" rel="noreferrer">
              <BsGithub size={16} />
            </a>
          </li> */}
          <li>
            <a href="#services">
              <Span>G</Span>
              ithub
            </a>
          </li>
          <li>
            <a href="#sda">
              <Button nav>RESUME</Button>
            </a>
          </li>
        </NavLinks>
        <ToggleNav>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ToggleNav>
      </NavBar>
    </Header>
  );
};

export default Nav;
