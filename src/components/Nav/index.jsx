import React, { useState } from "react";
import "./styles.css";
const Nav = () => {
  const [navHeight, setNavHeight] = useState(false);
  const [showNav, setShowNav] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 2) {
      setNavHeight(true);
    } else {
      setNavHeight(false);
    }
  });

  const handleShow = () => {
    setShowNav(!showNav);
  };
  if (showNav) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  return (
    <header className={navHeight ? "os-header" : ""}>
      <div className="container">
        <div
          className={
            navHeight && !showNav
              ? "os-nav-h"
              : showNav
              ? "show-nav-h "
              : "nav-h"
          }
        >
          <div className={showNav ? "show-flex" : "flex"}>
            {!showNav ? (
              <div className="name">
                <a href="https://paulpintang.netlify.app/" rel="noreferrer">
                  <h1>
                    <span>P</span>IN<span>.</span>
                  </h1>
                </a>
              </div>
            ) : (
              ""
            )}

            <div onClick={handleShow}>
              {showNav ? (
                <i class="fa-solid fa-xmark close"></i>
              ) : (
                <div className="toggle-menu">
                  <div className="flex">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
            <div className={!showNav ? "show" : ""}>
              <div className="menu-container">
                <div className="menu">
                  <ul>
                    <li onClick={handleShow}>
                      <a href="#services">
                        <span>S</span>ervices
                      </a>
                    </li>
                    <li onClick={handleShow}>
                      <a href="#projects">
                        <span>P</span>rojects
                      </a>
                    </li>
                    <li onClick={handleShow}>
                      <a href="#contacts">
                        <span>C</span>ontacts
                      </a>
                    </li>
                    <li className="github-icon">
                      <a
                        href="https://github.com/PaulPintang"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li onClick={handleShow} className="hide-link">
                      <a href="https://github.com/PaulPintang">
                        <span>G</span>ithub
                      </a>
                    </li>
                    <li onClick={handleShow} className="resume">
                      <a
                        href="https://drive.google.com/file/d/1g6palLjOPwLrxL2AjSK3oEPE_HwBdD-x/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="tp">RESUME</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
