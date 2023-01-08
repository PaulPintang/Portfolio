import React, { useContext } from "react";
import { Link } from "react-scroll";
import AnimationContext from "../../context/AnimationContext";
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
  const { Reveal, revealAnimation } = useContext(AnimationContext);
  return (
    <Container>
      <Reveal keyframes={revealAnimation}>
        <Section>
          <Column>
            <div>
              <h1>
                Hey, I'm <Bolder>Paul Pintang.</Bolder>
              </h1>
              <TextAnimated>I'm a Front-End Developer</TextAnimated>
              <BtnControl>
                <Link to="contacts" smooth={true} offset={-100} duration={500}>
                  <StyledButton red>Let's work together</StyledButton>
                </Link>

                <Link to="projects" smooth={true} offset={-100} duration={500}>
                  <StyledButton>Check out my projects</StyledButton>
                </Link>
              </BtnControl>
            </div>
            <Link to="services" smooth={true} offset={-100} duration={500}>
              <ScrollDown>
                <ArrowDown></ArrowDown>
                <a href="#services">
                  <ScrollTitle>scroll down</ScrollTitle>
                </a>
              </ScrollDown>
            </Link>
          </Column>
        </Section>
      </Reveal>
    </Container>
  );
};

export default Me;
