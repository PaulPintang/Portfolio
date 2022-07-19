import React from "react";
import { Container, Span, Flex, Center, Left } from "../styles/Reusable.styled";
const Experience = () => {
  return (
    <Container style={{ marginBottom: 130 }}>
      <h2>
        Work <Span>Experience</Span>
      </h2>
      <div style={{ paddingTop: 20 }}>
        <div style={{ width: 600, margin: "auto" }}>
          <Flex>
            <h4>Pixel8 Web Solutions & Consultancy Inc.</h4>
            <h4>Feb 2022 - May 2022</h4>
          </Flex>
          <div style={{ display: "flex", gap: 10, padding: 16 }}>
            <div style={{ height: 100, width: 2, background: "red" }}></div>
            <div>
              <h5>Web Developer Intern</h5>
              <p style={{ fontSize: 12 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet ab perferendis dicta nihil veniam cupiditate possimus
                mollitia illum
              </p>
              <div style={{ display: "flex", gap: 10, paddingTop: 5 }}>
                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>Javascript</small>
                </span>
                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>Vue</small>
                </span>

                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>Quasar Framework</small>
                </span>
                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>SCSS</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: 600, margin: "auto" }}>
          <Flex>
            <h4>Start-up Company</h4>
            <h4>July 2022 - Aug 2022</h4>
          </Flex>
          <div style={{ display: "flex", gap: 10, padding: 16 }}>
            <div style={{ height: 100, width: 2, background: "red" }}></div>
            <div>
              <h5>FrontEnd Developer</h5>
              <p style={{ fontSize: 12 }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet ab perferendis dicta nihil veniam cupiditate possimus
                mollitia illum
              </p>
              <div style={{ display: "flex", gap: 10, paddingTop: 5 }}>
                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>Javascript</small>
                </span>
                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>React</small>
                </span>

                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>Material UI</small>
                </span>
                <span
                  style={{
                    background: "indigo",
                    padding: 4,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 30,
                    fontSize: 14,
                  }}
                >
                  <small>Tailwind CSS</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experience;
