import "./styles.css";
import styled from "styled-components";
import { Container, Flex, Span } from "../styles/Reusable.styled";
import { Section, TextAnimated, BtnControl, StyledButton } from "./Me.styled";

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
              <StyledButton>Let's work together</StyledButton>
            </a>
            <a href="#projects">
              <StyledButton className="check-btn">
                Check out my projects
              </StyledButton>
            </a>
          </BtnControl>
        </Column>
      </Section>
    </Container>
  );
};

export default Me;
