import React from "react";
import "./styles.css";
// import Wave from '../images/wave1.svg'
const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      <div className="container">
        <div className="footer-details">
          <div className="flex">
            <small>Designed by Paul Justine &copy; 2022</small>
            <a
              href="https://github.com/PaulPintang/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <small>Built using React.Js</small>
          <div className="flex">
            <i className="fas fa-map-marker-alt"></i>
            <small>Philippines</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
