import "./styles/Nav.css";

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="nav-h">
          <div className="flex">
            <div className="name">
              <h1>
                <span>P</span>IN<span>.</span>
              </h1>
            </div>
            <div>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
