import React from "react";
import { BsGithub } from "react-icons/bs";
import {
  Container,
  Flex,
  Links,
  Span,
  Button,
} from "../styles/Reusable.styled";
import { Logo, Header } from "./Nav.styled";
const Nav = () => {
  return (
    <Header>
      <Flex>
        <Logo>
          <a href="https://paulpintang.netlify.app/" rel="noreferrer">
            <h1>
              <Span>P</Span>IN<Span>.</Span>
            </h1>
          </a>
        </Logo>
        <Links>
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
            <a href="">
              <Button>RESUME</Button>
            </a>
          </li>
        </Links>
      </Flex>
    </Header>
  );
};

export default Nav;
