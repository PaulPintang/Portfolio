import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import {
  Flex,
  Links,
  Span,
  Button,
  ToggleNav,
} from "../styles/Reusable.styled";
import { Logo, Header } from "./Nav.styled";
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
      <Flex contain>
        <Logo>
          <a href="https://paulpintang.netlify.app/" rel="noreferrer">
            <h1>
              <Span>P</Span>IN<Span>.</Span>
            </h1>
          </a>
        </Logo>
        <Links nav>
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
          <li>
            <a href="https://github.com/PaulPintang" rel="noreferrer">
              <BsGithub size={16} />
            </a>
          </li>
          <li>
            <a href="#sda">
              <Button>RESUME</Button>
            </a>
          </li>
        </Links>
        <ToggleNav>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ToggleNav>
      </Flex>
    </Header>
  );
};

export default Nav;
