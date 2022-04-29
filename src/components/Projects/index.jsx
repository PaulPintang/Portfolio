// import "./styles.css";
import { Flex, Container, Span } from "../styles/Reusable.styled.js";
import {
  Section,
  ProjectContainer,
  ProjectInfo,
  Description,
  LinkToProject,
} from "./Projects.styled";
import img1 from "../../images/projects/11.png";
import img2 from "../../images/projects/22.png";
import img3 from "../../images/projects/33.png";
import img4 from "../../images/projects/44.png";

const Projects = () => {
  return (
    <Section>
      <Container>
        <h2>
          My <Span>Projects</Span>
        </h2>
        <ProjectContainer className="rev eal">
          <div>
            <a
              href="https://paulpintang.github.io/Covid-19-Tracker-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img1} alt="" />
            </a>
          </div>
          <ProjectInfo>
            <div class="title">
              <h4>
                No.<Span>01</Span>
              </h4>
              <h3>Covid-19 Tracker</h3>
            </div>

            <Description>
              <p>
                This is my first project while learning javascript. I made this
                Covid-19 Tracker app after learning how to use an API on a
                website. Here's a link to the covid API that I used for this
                project:
                <a href="https://disease.sh" target="_blank" rel="noreferrer">
                  <Span>Covid-19 API</Span>
                </a>
              </p>
            </Description>

            <Flex right>
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
              <small>Covid-19 API</small>
            </Flex>

            <LinkToProject>
              <li>
                <a
                  href="https://github.com/PaulPintang/Covid-19-Tracker-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://paulpintang.github.io/Covid-19-Tracker-App/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </LinkToProject>
          </ProjectInfo>
        </ProjectContainer>
      </Container>
    </Section>
  );
};

export default Projects;
