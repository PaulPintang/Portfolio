// import "./styles.css";
import React from "react";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { Container, Span, Center, Flex } from "../styles/Reusable.styled";
import { Section, Wrapper, ContactDetails, Msg } from "./Contact.styled";
import qoute from "../../assets/svg/left-qoute.svg";
const Contacts = () => {
  return (
    <Section id="contacts">
      <Container>
        <Wrapper>
          <Center>
            <img src={qoute} alt="" />
            <h1>
              Need a front-end <Span>developer ?</Span>{" "}
            </h1>
            <h3>
              Let's <Span>work</Span> together !!
            </h3>
            <Msg>
              <small>
                " I'm open to job opportunities where I can contribute, learn
                and grow. If you have a good opportunity that matches my skills
                then don't hesitate to contact me."
              </small>
            </Msg>
            <ContactDetails>
              <Flex center>
                <GrMail />
                <a
                  href="mailto:paulpintang.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>paulpintang.dev@gmail.com</p>
                </a>
              </Flex>
              <Flex center>
                <MdLocalPhone />
                <a href="tel:09553054546" target="_blank" rel="noreferrer">
                  <p>+63 955 305 4546</p>
                </a>
              </Flex>
              <Flex center>
                <RiMessengerFill />
                <a
                  href="https://m.me/paulpintang.dev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Messenger</p>
                </a>
              </Flex>
            </ContactDetails>
          </Center>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Contacts;
