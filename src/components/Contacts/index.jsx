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
                " If you have a good opportunity that matches my skills and
                experience then don't hesitate to contact me."
              </small>
            </Msg>
            <ContactDetails>
              <Flex center>
                <GrMail />
                <a
                  href="https://mail.google.com/mail/u/2/#inbox?compose=GTvVlcSBmlnSzdZvvqJFTGmvkLQrtwwqqkDRqdcstbDNQnqdtxvWpGStLHGsVbhGZcLlpLwHFMmXq"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>pauljpintang@gmail.com</p>
                </a>
              </Flex>
              <Flex center>
                <MdLocalPhone />
                <p>+639553054546</p>
              </Flex>
              <Flex center>
                <RiMessengerFill />
                <a
                  href="https://m.me/pauljustin.pintang"
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
