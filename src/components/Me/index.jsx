// import "./styles.css";
import styled from "styled-components";
import {
  Container,
  Flex,
  Column,
  Span,
  Bolder,
  ScrollContainer,
  ScrollInner,
  ScrollDown,
  ScrollTitle,
  ArrowDown,
} from "../styles/Reusable.styled";
import { Section, TextAnimated, BtnControl, StyledButton } from "./Me.styled";

const Me = () => {
  return (
    <Container>
      <Section>
        <Column>
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
            <ScrollContainer>
              <ScrollInner>
                <ScrollDown>
                  <ArrowDown></ArrowDown>
                  <a href="#services">
                    <ScrollTitle>scroll down</ScrollTitle>
                  </a>
                </ScrollDown>
              </ScrollInner>
            </ScrollContainer>
          </BtnControl>
        </Column>
      </Section>
    </Container>
  );
};

export default Me;
