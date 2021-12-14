import "./styles/Skills.css";
import html from "../images/skills/html.svg";
import css from "../images/skills/css-3.svg";
import twc from "../images/skills/tailwindcss.svg";
import sass from "../images/skills/sass.svg";
import js from "../images/skills/javascript.svg";
import git from "../images/skills/git.svg";
import netlify from "../images/skills/netlify.svg";
import react from "../images/skills/react.png";

const Skills = () => {
  return (
    <section className="my-skills">
      <div className="container">
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="flex">
          <div className="lg">
            <img src={html} alt=""></img>
            <p>HTML5</p>
          </div>
          <div className="lg">
            <img src={css} alt=""></img>
            <p>CSS</p>
          </div>
          <div className="lg">
            <img src={twc} alt="" style={{ width: 50 }}></img>
            <p>Tailwind CSS</p>
          </div>
          <div className="lg">
            <img src={sass} alt=""></img>
            <p>Sass</p>
          </div>
          <div className="lg">
            <img src={js} alt=""></img>
            <p>Javascript</p>
          </div>
          <div className="lg">
            <img src={react} alt=""></img>
            <p>React</p>
          </div>
          <div className="lg">
            <img src={git} alt=""></img>
            <p>Git</p>
          </div>
          <div className="lg">
            <img src={netlify} alt=""></img>
            <p>Netlify</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
