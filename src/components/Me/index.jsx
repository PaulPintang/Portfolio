// import "./styles.css";
import styled from "styled-components";
import {
  Container,
  Flex,
  Span,
  ScrollContainer,
  ScrollInner,
  ScrollDown,
  ScrollTitle,
  ArrowDown,
} from "../styles/Reusable.styled";
import {
  Section,
  TextAnimated,
  BtnControl,
  StyledButton,
  StyledBtnRed,
} from "./Me.styled";

const Column = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 4.2rem;
    font-variant: small-caps;
    font-weight: 200;
    letter-spacing: 4px;
  }
`;

const Bolder = styled(Span)`
  font-weight: 700;
`;

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
