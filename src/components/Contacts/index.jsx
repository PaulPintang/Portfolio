import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { Container, Span, Center, Flex } from "../styles/Reusable.styled";
import { Section, Wrapper, ContactDetails, Msg } from "./Contact.styled";
import { FormContainer, Input, SendBtn, TextArea } from "./Form.styled";
import qoute from "../../assets/svg/left-qoute.svg";

const Contacts = () => {
  const form = useRef();
  const [loaderMsg, setLoaderMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoaderMsg(true);
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setTimeout(() => {
            console.log("message sent");
            console.log(result);
            e.target.reset();
            setLoaderMsg(false);
          }, 3000);
        },
        (error) => {
          setTimeout(() => {
            console.log("message not sent");
            console.log(error);
            e.target.reset();
            setLoaderMsg(false);
          }, 3000);
        }
      );
  };

  return (
    <Section id="contacts">
      <Container>
        <Center>
          <h1>
            Need a front-end <Span>developer ?</Span>{" "}
          </h1>
          <h3>
            Let's <Span>work</Span> together !!
          </h3>
        </Center>
        <Wrapper>
          <img src={qoute} alt="" />
          <Flex>
            <ContactDetails>
              <div>
                <h3>
                  <Span>Contact</Span> Information
                </h3>
                <Msg>
                  <small>
                    If you have a good opportunity that matches my skills then
                    don't hesitate to contact me.
                  </small>
                </Msg>
              </div>
              <Flex left>
                <FaLinkedin />
                <a
                  href="https://www.linkedin.com/in/paulpintangdev/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>LinkedIn</p>
                </a>
              </Flex>
              <Flex left>
                <GrMail />
                <a
                  href="mailto:paulpintang.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>paulpintang.dev@gmail.com</p>
                </a>
              </Flex>

              <Flex left>
                <MdLocalPhone />
                <a href="tel:09553054546" target="_blank" rel="noreferrer">
                  <p>+63 955 305 4546</p>
                </a>
              </Flex>

              <Flex left>
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
            <FormContainer>
              <form ref={form} onSubmit={sendEmail} autocomplete="off">
                <Flex column def>
                  <Flex justify>
                    <Input
                      type="text"
                      placeholder="Your name"
                      name="user_name"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your email"
                      name="user_email"
                      required
                    />
                  </Flex>
                  <TextArea
                    name="message"
                    placeholder="Your message"
                    required
                  />
                  <SendBtn red type="submit">
                    {loaderMsg ? "Sending..." : "Send"}
                  </SendBtn>
                </Flex>
              </form>
            </FormContainer>
          </Flex>
        </Wrapper>
      </Container>
    </Section>
  );
};

export default Contacts;
