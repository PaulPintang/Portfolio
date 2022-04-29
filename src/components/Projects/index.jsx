// import "./styles.css";
import {
  Flex,
  Container,
  Span,
  Right,
  Left,
} from "../styles/Reusable.styled.js";
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
          <ProjectInfo right>
            <Right>
              <h4>
                No.<Span>01</Span>
              </h4>
              <h3>Covid-19 Tracker</h3>
            </Right>

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

        <ProjectContainer className="rev eal">
          <ProjectInfo left>
            <Left>
              <h4>
                No.<Span>02</Span>
              </h4>
              <h3>Fylo Landing Page</h3>
            </Left>

            <Description>
              <p>
                This is a frontendmentor.io landing page challenge to help me
                practice creating responsive websites. This task was quite
                beneficial in terms of learning CSS best practices. Here's the
                link to the challenge from their website:
                <a
                  href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Span>fylo-landing-page-challenge</Span>
                </a>
              </p>
            </Description>

            <Flex left>
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
            </Flex>

            <LinkToProject>
              <li>
                <a
                  href="https://github.com/PaulPintang/Fylo-Landing-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://festive-goldberg-678aaa.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </li>
            </LinkToProject>
          </ProjectInfo>
          <div>
            <a
              href="https://paulpintang.github.io/Covid-19-Tracker-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2} alt="" />
            </a>
          </div>
        </ProjectContainer>
      </Container>
    </Section>
  );
};

export default Projects;
