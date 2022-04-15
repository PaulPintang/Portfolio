import "./styles.css";

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-h">
          <div className="flex">
            <div className="name">
              <a href="https://impaul.netlify.app" rel="noreferrer">
                <h1>
                  <span>P</span>IN<span>.</span>
                </h1>
              </a>
            </div>
            <div className="toggle-menu">
              <div className="flex">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <a href="#services">
                    <span>S</span>ervices
                  </a>
                </li>
                <li>
                  <a href="#projects">
                    <span>P</span>rojects
                  </a>
                </li>
                <li>
                  <a href="#contacts">
                    <span>C</span>ontacts
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PaulPintang"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="resume">
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
    </header>
  );
};

export default Nav;
