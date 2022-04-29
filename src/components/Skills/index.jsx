// import "./styles.css";
import { Center, Container, Span } from "../styles/Reusable.styled";
import { Section, FlexContainer, ImgContainer } from "./Skills.styled";
import html from "../../images/skills/html.svg";
import css from "../../images/skills/css-3.svg";
import twc from "../../images/skills/tailwindcss.svg";
import sass from "../../images/skills/sass.svg";
import js from "../../images/skills/javascript.svg";
import git from "../../images/skills/git.svg";
import netlify from "../../images/skills/netlify.svg";
import react from "../../images/skills/react.png";

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
              <p>Tailwind CSS</p>
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
