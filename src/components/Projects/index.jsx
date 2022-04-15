import "./styles.css";
import img1 from "../../images/projects/11.png";
import img2 from "../../images/projects/22.png";
import img3 from "../../images/projects/33.png";
import img4 from "../../images/projects/44.png";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2>
          My <span>Projects</span>
        </h2>
        <div className="img-flex reveal">
          <div>
            <a
              href="https://paulpintang.github.io/Covid-19-Tracker-App/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img1} alt="" />
            </a>
          </div>
          <div className="img-info">
            <div className="img-title">
              <h4>
                No.<span>01</span>
              </h4>
              <h3>Covid-19 Tracker</h3>
            </div>

            <div className="img-desc">
              <p>
                This is my first project while learning javascript. I made this
                Covid-19 Tracker app after learning on how to use an API on a
                website. Here's a link to the public API that I used for this
                project:
                <a href="https://disease.sh" target="_blank" rel="noreferrer">
                  Covid-19 API
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
              <small>Covid-19 API</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/PaulPintang/Covid-19-Tracker-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://paulpintang.github.io/Covid-19-Tracker-App/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="img-flex reveal">
          <div className="img-info-2">
            <div className="img-title">
              <h4>
                No.<span>02</span>
              </h4>
              <h3>Fylo Landing Page</h3>
            </div>

            <div className="img-desc">
              <p>
                This is a frontendmentor.io landing page challenge to help me
                practice creating responsive websites. This task was quite
                beneficial in terms of learning CSS best practices. Here's the
                link of the challenge from their website:
                <a
                  href="https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd"
                  target="_blank"
                  rel="noreferrer"
                >
                  fylo-landing-page-challenge
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/PaulPintang/Fylo-Landing-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://festive-goldberg-678aaa.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="https://festive-goldberg-678aaa.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img2} alt="" />
            </a>
          </div>
        </div>

        <div className="img-flex reveal">
          <div>
            <a
              href="https://sharp-heyrovsky-44e00e.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img3} alt="" />
            </a>
          </div>
          <div className="img-info">
            <div className="img-title">
              <h4>
                No.<span>03</span>
              </h4>
              <h3>EasyBank Landing Page</h3>
            </div>

            <div className="img-desc">
              <p>
                The frontendmentor.io website serves as a classroom setting for
                me to improved my development skills. This project challenged me
                to design the navigation bar from scratch. Here's the link of
                the challenge from their website.
                <a
                  href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN"
                  target="_blank"
                  rel="noreferrer"
                >
                  easybank-landing-page-challenge
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/PaulPintang/easybank-landing-page"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://sharp-heyrovsky-44e00e.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img-flex reveal">
          <div className="img-info-2">
            <div className="img-title">
              <h4>
                No.<span>04</span>
              </h4>
              <h3>Social Media Dashboard</h3>
            </div>

            <div className="img-desc">
              <p>
                This frontendmentor.io challenge put me to a test in javascript.
                This simple project improved my understanding of DOM
                manipulation and javascript eventlisterner implementation.
                Here's the link of the challenge from their website.
                <a
                  href="https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H"
                  target="_blank"
                  rel="noreferrer"
                >
                  social-media-dashboard-challenge
                </a>
              </p>
            </div>

            <div className="flex">
              <small>HTML</small>
              <small>CSS</small>
              <small>JAVASCRIPT</small>
            </div>

            <div className="opt">
              <ul>
                <li>
                  <a
                    href="https://github.com/PaulPintang/Social-media-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://socialllll-media-dashboard.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt">
            <a
              href="https://socialllll-media-dashboard.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={img4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
