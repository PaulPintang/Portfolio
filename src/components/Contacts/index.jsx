// import "./styles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { Container, Span, Center, Flex } from "../styles/Reusable.styled";
import { Section, Wrapper, ContactDetails, Msg } from "./Contact.styled";
import { FormContainer, Input, SendBtn, TextArea } from "./Form.styled";
import qoute from "../../assets/svg/left-qoute.svg";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
              <Flex>
                <GrMail />
                <a
                  href="mailto:paulpintang.dev@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>paulpintang.dev@gmail.com</p>
                </a>
              </Flex>
              <Flex>
                <MdLocalPhone />
                <a href="tel:09553054546" target="_blank" rel="noreferrer">
                  <p>+63 955 305 4546</p>
                </a>
              </Flex>
              <Flex>
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
              <form ref={form} onSubmit={sendEmail}>
                {/* <input type="hidden" name="to_name" value="Paul" />
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Subject</label>
                  <input type="text" name="subject" value="Web Development Inquiry" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <button type="submit">Send</button> */}
                <Flex column def>
                  <Flex justify>
                    <Input placeholder="Your name" />
                    <Input placeholder="Your email" />
                  </Flex>
                  <TextArea name="message" placeholder="Your message" />
                  <SendBtn red>Send Message</SendBtn>
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
