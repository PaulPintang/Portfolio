import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { Container, Flex, Center } from "../styles/Reusable.styled";
import { FooterDiv } from "./Footer.styled";
const Footer = () => {
  return (
    <FooterDiv>
      <hr></hr>
      <Container>
        <Center>
          <div>
            <small>Designed by Paul Justine &copy; 2022</small>
          </div>
          <small>Built using React.Js</small>
          <Flex center>
            <HiLocationMarker />
            <small>Philippines</small>
          </Flex>
        </Center>
      </Container>
    </FooterDiv>
  );
};

export default Footer;
