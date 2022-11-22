import React, { useState, useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { Span, Button, ToggleNav } from "../styles/Reusable.styled";
import { Logo, Header, NavLinks, NavBar, Close } from "./Nav.styled";
const Nav = () => {
  const [navHeight, setNavHeight] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
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
      // setClick(false);
    } else {
      setShowMenu(true);
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
      <NavBar click={click} containmobile contain>
        {!click && (
          <Logo>
            <a href="https://paulpintang.netlify.app/" rel="noreferrer">
              <h1>
                <Span>P</Span>IN<Span>.</Span>
              </h1>
            </a>
          </Logo>
        )}

        {click ? (
          <Close onClick={handleClick}>
            <MdOutlineClose />
          </Close>
        ) : (
          <ToggleNav onClick={handleClick}>
            <div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </ToggleNav>
        )}

        <NavLinks click={click}>
          <li>
            <a
              href="#services"
              onClick={() => {
                setClick(false);
                setShowMenu(true);
              }}
            >
              <Span>S</Span>
              ervices
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => {
                setClick(false);
                setShowMenu(true);
              }}
            >
              <Span>P</Span>
              rojects
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => {
                setClick(false);
                setShowMenu(true);
              }}
            >
              <Span>E</Span>
              xperience
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={() => {
                setClick(false);
                setShowMenu(true);
              }}
            >
              <Span>C</Span>
              ontacts
            </a>
          </li>
          {click ? (
            <li>
              <a
                href="#services"
                onClick={() => {
                  setClick(false);
                  setShowMenu(true);
                }}
              >
                <Span>G</Span>
                ithub
              </a>
            </li>
          ) : (
            <li>
              <a
                href="https://github.com/PaulPintang"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub size={16} />
              </a>
            </li>
          )}

          <li>
            <a href="https://drive.google.com/file/d/1g6palLjOPwLrxL2AjSK3oEPE_HwBdD-x/view?usp=sharing">
              <Button nav>RESUME</Button>
            </a>
          </li>
        </NavLinks>
      </NavBar>
    </Header>
  );
};

export default Nav;
