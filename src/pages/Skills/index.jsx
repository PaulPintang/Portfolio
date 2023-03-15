import React from "react";
import { Center, Container, Span } from "../styles/Reusable.styled";
import { Section, FlexContainer, ImgContainer } from "./Skills.styled";
import html from "../../assets/img/skills/html.svg";
import css from "../../assets/img/skills/css-3.svg";
import twc from "../../assets/img/skills/tailwindcss.svg";
import sass from "../../assets/img/skills/sass.svg";
import js from "../../assets/img/skills/javascript.svg";
import ts from "../../assets/img/skills/typescript.png";
import node from "../../assets/img/skills/nodejs.png";
import express from "../../assets/img/skills/express.png";
import mongo from "../../assets/img/skills/mongodb.svg";
import git from "../../assets/img/skills/git.svg";
import react from "../../assets/img/skills/react.png";
import redux from "../../assets/img/skills/redux.png";
import mantine from "../../assets/img/skills/mantine.svg";
import styled from "../../assets/img/skills/sc.png";

const Skills = () => {
  return (
    <Section>
      <Container>
        <h2>
          My <Span>Skills</Span>
        </h2>
        <FlexContainer justify>
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
              <p>JavaScript</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={ts} alt=""></img>
              <p>TypeScript</p>
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
              <img src={styled} alt=""></img>
              <p>Styled</p>
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
              <img src={redux} alt=""></img>
              <p>Redux Toolkit</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={mongo} alt=""></img>
              <p>MongoDB</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={express} alt=""></img>
              <p>Express.Js</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={react} alt=""></img>
              <p>React.Js</p>
            </Center>
          </ImgContainer>
          <ImgContainer>
            <Center>
              <img src={node} alt=""></img>
              <p>Node.Js</p>
            </Center>
          </ImgContainer>
        </FlexContainer>
      </Container>
    </Section>
  );
};

export default Skills;
