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
import img1 from "../../assets/img/projects/1.png";
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
              href="https://github.com/PaulPintang/Pintern"
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
                  No. <Span>01</Span>
                </h4>
              </Right>

              <h3>Pintern</h3>
            </div>

            <Description>
              <p>
                <b>Pintern</b> was built on the MERN stack and this is what I'm
                <b> currently building.</b> This is a full-stack website that
                can help companies to manage the everyday tasks of their
                trainees. Users can join or create teams through an invitation
                code.
              </p>
            </Description>

            <Flex right>
              <small>React</small>
              <small>Express</small>
              <small>MongoDB</small>
              <small>MantineUI</small>
            </Flex>

            <LinkToProject>
              <li>
                <a
                  href="https://github.com/PaulPintang/Pintern"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              {/* <li>
                <a
                  href="https://github.com/PaulPintang/Pintern"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink size={21} />
                </a>
              </li> */}
            </LinkToProject>
          </ProjectInfo>
        </ProjectContainer>

        {/* No 2 */}
        <ProjectContainer>
          <ProjectInfo left>
            <div>
              <h4>
                No. <Span>02</Span>
              </h4>
              <h3>Covid-19 Tracker V2</h3>
            </div>

            <Description>
              <p>
                A nicer look and another version of my covid tracker website
                built with React and Tailwind CSS. Added features include
                filtering by continents, top countries with active covid cases,
                and detailed covid stats by countries.
              </p>
            </Description>

            <Flex left>
              <small>React</small>
              <small>Tailwind CSS</small>
              <small>Javascript</small>
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
                  No. <Span>03</Span>
                </h4>
              </Right>

              <h3>Covid-19 Tracker V1</h3>
            </div>

            <Description>
              <p>
                The first website I designed and built in 2020. This is a simple
                covid tracker website with the use of API. This is the time I
                got interested in learning more about web development.
              </p>
            </Description>

            <Flex right>
              <small>HTML</small>
              <small>CSS</small>
              <small>Javascript</small>
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
                No. <Span>04</Span>
              </h4>
              <h3>Portfolio Website</h3>
            </div>

            <Description>
              <p>
                The first portfolio website I designed and built in 2021. I was
                interested in learning React.Js, so I build this with React to
                improve my learning about the library.
              </p>
            </Description>

            <Flex left>
              <small>React</small>
              <small>Styled Components</small>
              <small>Javascript</small>
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
