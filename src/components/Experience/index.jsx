import React from "react";
import { Span } from "../styles/Reusable.styled";
import {
  WorkContainer,
  WorkContent,
  FlexContent,
  Line,
  Tools,
  Badge,
} from "./Experience.styled";
const Experience = () => {
  return (
    <WorkContainer id="experience">
      <h2>
        Work <Span>Experience</Span>
      </h2>
      <WorkContent>
        <FlexContent nogap>
          <h4>Pixel8 Web Solutions & Consultancy Inc.</h4>
          <h4>Feb 2022 - May 2022</h4>
        </FlexContent>
        <FlexContent containmobile>
          <Line></Line>
          <section>
            <h5>Web Developer Intern</h5>
            <p>
              Developing front-end features, responsive designs, writing clean
              code, and convert Adobe XD UI designs on Vue.Js and Quasar
              Frameworks.
            </p>
            <Tools>
              <Badge>
                <small>Javascript</small>
              </Badge>
              <Badge>
                <small>Vue</small>
              </Badge>

              <Badge>
                <small>Quasar Framework</small>
              </Badge>
              <Badge>
                <small>SCSS</small>
              </Badge>
            </Tools>
          </section>
        </FlexContent>
      </WorkContent>
      <WorkContent>
        <FlexContent nogap>
          <h4>Snack Software, LLC</h4>
          <h4>July 2021 - Aug 2021</h4>
        </FlexContent>
        <FlexContent containmobile>
          <Line></Line>
          <section>
            <h5>Front-end Developer Intern</h5>
            <p>
              Responsible for coding the front-end designs, converting the given
              UI mockups, and maintain a fast and easily maintainable code base
              of the project.
            </p>
            <Tools style={{ display: "flex", gap: 10, paddingTop: 5 }}>
              <Badge>
                <small>Javascript</small>
              </Badge>
              <Badge>
                <small>React</small>
              </Badge>

              <Badge>
                <small>Material UI</small>
              </Badge>
              <Badge>
                <small>Tailwind CSS</small>
              </Badge>
            </Tools>
          </section>
        </FlexContent>
      </WorkContent>
    </WorkContainer>
  );
};

export default Experience;
