import React from "react";
import { Center, Container, Span } from "../styles/Reusable.styled";
import { Section, FlexContainer, ImgContainer } from "./Skills.styled";
import html from "../../assets/img/skills/html.svg";
import css from "../../assets/img/skills/css-3.svg";
import twc from "../../assets/img/skills/tailwindcss.svg";
import sass from "../../assets/img/skills/sass.svg";
import js from "../../assets/img/skills/javascript.svg";
import git from "../../assets/img/skills/git.svg";
import netlify from "../../assets/img/skills/netlify.svg";
import react from "../../assets/img/skills/react.png";
import mantine from "../../assets/img/skills/mantine.svg";
import styled from "../../assets/img/skills/sc.png";

const Skills = () => {
  return (
    <Section>
      <Container>
        <h2>
          My <Span>Skills</Span>
        </h2>
        <FlexContainer>
          <ImgContainer>
            <Center>
              <img src={html} alt=""></img>
              <p>HTML5</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={css} alt=""></img>
              <p>CSS</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={twc} alt="" style={{ width: 50 }}></img>
              <p>Tailwind</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={sass} alt=""></img>
              <p>Sass</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={js} alt=""></img>
              <p>Javascript</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={react} alt=""></img>
              <p>React</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={styled} alt=""></img>
              <p>Styled</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={mantine} alt=""></img>
              <p>Mantine</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={git} alt=""></img>
              <p>Git</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={netlify} alt=""></img>
              <p>Netlify</p>
            </Center>
          </ImgContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Skills;
