import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Flex, Container, Span, Right } from "../styles/Reusable.styled.js";
import {
  Section,
  ProjectContainer,
  ProjectInfo,
  Description,
  LinkToProject,
} from "./Projects.styled";
import img1 from "../../assets/img/projects/2.png";
import img2 from "../../assets/img/projects/2.png";
import img3 from "../../assets/img/projects/3.png";
import img4 from "../../assets/img/projects/4.png";

const Projects = () => {
  return (
    <Section id="projects">
      <Container>
        <h2>
          My <Span>Projects</Span>
        </h2>

        {/* No 1 */}
        <ProjectContainer>
          <div>
            <a
              href="https://sharp-heyrovsky-44e00e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img1} alt="" />
            </a>
          </div>
          <ProjectInfo right>
            <div>
              <Right>
                <h4>
                  No.<Span>01</Span>
                </h4>
              </Right>

              <h3>Pintern</h3>
            </div>

            <Description>
              <p>
                The frontendmentor.io website serves as a classroom setting for
                me to improve my development skills. This project challenged me
                to design the navigation bar from scratch. Lorem ipsum, dolor
                sit amet consectetur adipisicing.
              </p>
            </Description>

            <Flex right>
              <small>REACT</small>
              <small>EXPRESS</small>
              <small>MONGODB</small>
              <small>MANTINE</small>
            </Flex>

            <LinkToProject>
              <li>
                <a
                  href="https://github.com/PaulPintang/easybank-landing-page"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://sharp-heyrovsky-44e00e.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={21} />
                </a>
              </li>
            </LinkToProject>
          </ProjectInfo>
        </ProjectContainer>

        {/* No 2 */}
        <ProjectContainer>
          <ProjectInfo left>
            <div>
              <h4>
                No.<Span>02</Span>
              </h4>
              <h3>Covid-19 Tracker V2</h3>
            </div>

            <Description>
              <p>
                This is a frontendmentor.io landing page challenge to help me
                practice creating responsive websites. This task was quite
                beneficial in terms of learning CSS best practices. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Corporis,
                accusamus?
              </p>
            </Description>

            <Flex left>
              <small>REACT</small>
              <small>TAILWINDCSS</small>
              <small>JAVASCRIPT</small>
              <small>API</small>
            </Flex>

            <LinkToProject>
              <li>
                <a
                  href="https://github.com/PaulPintang/covid19-tracker-v2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://pincovid19-tracker-v2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={21} />
                </a>
              </li>
            </LinkToProject>
          </ProjectInfo>
          <div>
            <a
              href="https://pincovid19-tracker-v2.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2} alt="" />
            </a>
          </div>
        </ProjectContainer>

        {/* No 3 */}
        <ProjectContainer>
          <div>
            <a
              href="https://paulpintang.github.io/Covid-19-Tracker-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img3} alt="" />
            </a>
          </div>
          <ProjectInfo right>
            <div>
              <Right>
                <h4>
                  No.<Span>03</Span>
                </h4>
              </Right>

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
              <small>API</small>
            </Flex>

            <LinkToProject>
              <li>
                <a
                  href="https://github.com/PaulPintang/Covid-19-Tracker-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://paulpintang.github.io/Covid-19-Tracker-App/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={21} />
                </a>
              </li>
            </LinkToProject>
          </ProjectInfo>
        </ProjectContainer>

        {/* No 4 */}
        <ProjectContainer>
          <ProjectInfo left>
            <div>
              <h4>
                No.<Span>04</Span>
              </h4>
              <h3>Portfolio Website</h3>
            </div>

            <Description>
              <p>
                This frontendmentor.io challenge put me to a test in javascript.
                This simple project improved my understanding of DOM
                manipulation and javascript event listerner implementation.
                Lorem ipsum dolor sit amet, consectetur adipisicing.
              </p>
            </Description>

            <Flex left>
              <small>REACT</small>
              <small>STYLED-COMPONENTS</small>
              <small>JAVASCRIPT</small>
            </Flex>

            <LinkToProject>
              <li>
                <a
                  href="https://github.com/PaulPintang/Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://paulpintang.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={21} />
                </a>
              </li>
            </LinkToProject>
          </ProjectInfo>
          <div>
            <a
              href="https://paulpintang.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img4} alt="" />
            </a>
          </div>
        </ProjectContainer>
      </Container>
    </Section>
  );
};

export default Projects;
