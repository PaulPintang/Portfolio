import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { Span, Button, ToggleNav } from "../styles/Reusable.styled";
import { Logo, Header, NavLinks, NavBar, Close } from "./Nav.styled";
const Nav = () => {
  const [navHeight, setNavHeight] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  // useEffect(() => {
  //   showButton();
  // }, []);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 2) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  });

  const showButton = () => {
    if (window.innerWidth <= 768) {
      //  setShowToggle(false);
      console.log("false");
    } else {
      //  setShowToggle(true);
      console.log("true");
    }
  };

  window.addEventListener("resize", showButton);
  // const handleShow = () => {
  //   setShowNav(!showNav);
  // };
  // if (showNav) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "unset";
  // }

  return (
    <Header navHeight={navHeight}>
      <NavBar contain>
        <Logo>
          <a href="https://paulpintang.netlify.app/" rel="noreferrer">
            <h1>
              <Span>P</Span>IN<Span>.</Span>
            </h1>
          </a>
        </Logo>

        <NavLinks>
          <li>
            <a href="#services">
              <Span>S</Span>
              ervices
            </a>
          </li>
          <li>
            <a href="#projects">
              <Span>P</Span>
              rojects
            </a>
          </li>
          <li>
            <a href="#contacts">
              <Span>C</Span>
              ontacts
            </a>
          </li>
          {/* <li>
            <a href="https://github.com/PaulPintang" rel="noreferrer">
              <BsGithub size={16} />
            </a>
          </li> */}
          <li>
            <a href="#services">
              <Span>G</Span>
              ithub
            </a>
          </li>
          <li>
            <a href="#sda">
              <Button nav>RESUME</Button>
            </a>
          </li>
        </NavLinks>
        {/* 
        <Close>
          <MdOutlineClose />
        </Close>
        <ToggleNav>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ToggleNav> */}
      </NavBar>
    </Header>
  );
};

export default Nav;
