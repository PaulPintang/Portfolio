import React from "react";
import { Container, Flex, Links, Span } from "../styles/Reusable.styled";
import { Logo, Header } from "./Nav.styled";
const Nav = () => {
  return (
    <Container>
      <Header>
        <Flex>
          <Logo>
            <h1>
              <Span>P</Span>IN<Span>.</Span>
            </h1>
          </Logo>
          <Links>
            <li>
              <a href="">
                <Span>S</Span>
                ervices
              </a>
            </li>
            <li>
              <a href="">
                <Span>P</Span>
                rojects
              </a>
            </li>
            <li>
              <a href="">
                <Span>C</Span>
                ontacts
              </a>
            </li>
            {/* <li>
              <a href="">
                <Span>S</Span>
                ervices
              </a>
            </li>
            <li>
              <a href="">
                <Span>S</Span>
                ervices
              </a>
            </li> */}
          </Links>
        </Flex>
      </Header>
    </Container>
  );
};

export default Nav;
