import React from "react";
import { Container, Flex, Center } from "../styles/Reusable.styled";
import { FooterDiv } from "./Footer.styled";
import "./styles.css";
// import Wave from '../images/wave1.svg'
const Footer = () => {
  return (
    <FooterDiv>
      <hr></hr>
      <Container>
        <Center>
          <Flex center>
            <small>Designed by Paul Justine &copy; 2022</small>
            <a
              href="https://github.com/PaulPintang/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </Flex>
          <small>Built using React.Js</small>
          <Flex center>
            <i className="fas fa-map-marker-alt"></i>
            <small>Philippines</small>
          </Flex>
        </Center>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
