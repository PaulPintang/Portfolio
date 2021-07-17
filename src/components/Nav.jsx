import "./styles/Nav.css";

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
                    href="https://github.com/puldyastin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="resume">
                  <a href="https://drive.google.com/file/d/1Fb9hOcxr08BLLOZsiOf_oKLWa3PMmSZY/view?usp=sharing" target="_blank" rel="noreferrer">
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
