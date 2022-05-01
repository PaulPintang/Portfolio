import React from "react";
import {
  Container,
  Bolder,
  ScrollDown,
  ScrollTitle,
  ArrowDown,
} from "../styles/Reusable.styled";
import {
  Section,
  Column,
  TextAnimated,
  BtnControl,
  StyledButton,
} from "./Me.styled";

const Me = () => {
  return (
    <Container>
      <Section>
        <Column>
          <div>
            <h1>
              Hey, I'm <Bolder>Paul Justine.</Bolder>
            </h1>
            <TextAnimated>I'm a Front-End Developer</TextAnimated>
            <BtnControl>
              <a href="#contacts">
                <StyledButton red>Let's work together</StyledButton>
              </a>
              <a href="#projects">
                <StyledButton>Check out my projects</StyledButton>
              </a>
            </BtnControl>
          </div>
          <ScrollDown>
            <ArrowDown></ArrowDown>
            <a href="#services">
              <ScrollTitle>scroll down</ScrollTitle>
            </a>
          </ScrollDown>
        </Column>
      </Section>
    </Container>
  );
};

export default Me;
