import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { Span, Button, ToggleNav } from "../styles/Reusable.styled";
import { Logo, Header, NavLinks, NavBar, Close } from "./Nav.styled";
const Nav = () => {
  const [navHeight, setNavHeight] = useState(false);
  // const [showNav, setShowNav] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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

  const showMenuBar = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  window.addEventListener("resize", showMenuBar);
  // const handleShow = () => {
  //   setShowNav(!showNav);
  // };
  if (showMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <Header navHeight={navHeight} showMenu={showMenu}>
      <NavBar showMenu={showMenu} contain>
        {!showMenu && (
          <Logo>
            <a href="https://paulpintang.netlify.app/" rel="noreferrer">
              <h1>
                <Span>P</Span>IN<Span>.</Span>
              </h1>
            </a>
          </Logo>
        )}
        {!showMenu ? (
          <>
            <ToggleNav onClick={() => setShowMenu(true)}>
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </ToggleNav>
          </>
        ) : (
          <NavLinks>
            <Close onClick={() => setShowMenu(false)}>
              <MdOutlineClose />
            </Close>
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
            {showMenu ? (
              <li>
                <a href="#services">
                  <Span>G</Span>
                  ithub
                </a>
              </li>
            ) : (
              <li>
                <a href="https://github.com/PaulPintang" rel="noreferrer">
                  <BsGithub size={16} />
                </a>
              </li>
            )}

            <li>
              <a href="#sda">
                <Button nav>RESUME</Button>
              </a>
            </li>
          </NavLinks>
        )}
      </NavBar>
    </Header>
  );
};

export default Nav;
