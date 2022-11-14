import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  console.log(process.env.REACT_APP_SERVICE_ID);
  console.log(process.env.REACT_APP_TEMPLATE_ID);
  console.log(process.env.REACT_APP_PUBLIC_KEY);
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
    <form ref={form} onSubmit={sendEmail}>
      <input type="hidden" name="to_name" value="Paul" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Subject</label>
      <input type="text" name="subject" value="Web Development Inquiry" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default Form;
