import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { Span, Button, ToggleNav } from "../styles/Reusable.styled";
import { Logo, Header, NavLinks, NavBar, Close } from "./Nav.styled";
const Nav = () => {
  const [navHeight, setNavHeight] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    handleShowMenu();
    handleNavHeight();
  }, []);

  const handleNavHeight = () => {
    if (window.scrollY >= 2) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  };

  const handleShowMenu = () => {
    if (window.innerWidth <= 768) {
      setShowMenu(false);
      setClick(false);
    } else {
      setShowMenu(true);
      setClick(false);
    }
  };

  window.addEventListener("resize", handleShowMenu);
  window.addEventListener("scroll", handleNavHeight);

  click
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  const handleClick = () => {
    setShowMenu(!showMenu);
    setClick(!click);
  };

  return (
    <Header navHeight={navHeight} click={click}>
      <NavBar click={click} contain>
        {!click && (
          <Logo>
            <a href="https://paulpintang.netlify.app/" rel="noreferrer">
              <h1>
                <Span>P</Span>IN<Span>.</Span>
              </h1>
            </a>
          </Logo>
        )}
        <ToggleNav onClick={handleClick} showMenu={showMenu}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </ToggleNav>
        {click && (
          <Close onClick={handleClick}>
            <MdOutlineClose />
          </Close>
        )}

        <NavLinks showMenu={showMenu}>
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
          {click ? (
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
      </NavBar>
    </Header>
  );
};

export default Nav;
