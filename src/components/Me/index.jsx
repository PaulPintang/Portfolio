import "./styles.css";
import {
  Section,
  Container,
  TextAnimated,
  BtnControl,
  StyledButton,
} from "./Me.styled";
const Me = () => {
  return (
    <Section>
      <Container>
        <div className="flex">
          <h1>
            Hey, I'm <span className="my-name">Paul Justine.</span>
          </h1>
          <TextAnimated>I'm a Front-End Developer</TextAnimated>
          <BtnControl>
            <a href="#contacts">
              <StyledButton>Let's work together</StyledButton>
            </a>
            <a href="#projects">
              <StyledButton className="check-btn">
                Check out my projects
              </StyledButton>
            </a>

            <div id="wrapper">
              <div id="wrapper-inner">
                <div id="scroll-down">
                  <span className="arrow-down"></span>
                  <a href="#services">
                    <span id="scroll-title">scroll down</span>
                  </a>
                </div>
              </div>
            </div>
          </BtnControl>
        </div>
      </Container>
    </Section>
  );
};

export default Me;
