import "./styles/Offer.css";
import responsive from "../images/responsive.svg";
import design from "../images/design.svg";
import team from "../images/team.svg";

const Offer = () => {
  return (
    <section id="services" className="offer">
      <div className="container">
        <div className="offer-tag">
          <h2>
            What i <span>offer?</span>
          </h2>
          <p>Create functional user experience</p>
        </div>
        <div className="flex">
          <div className="offer-cards reveal">
            <img src={responsive} alt=""></img>
            <div className="o-info">
              <h3>Responsive Website</h3>
              <p>
                Develop a responsive website layout for better user experience
              </p>
            </div>
          </div>
          <div className="offer-cards reveal">
            <img src={design} alt=""></img>
            <div className="o-info">
              <h3>Convert your design into a working website.</h3>
              <p>
                Make an ideal functional website with your mockups and ui
                prototypes.
              </p>
            </div>
          </div>
          <div className="offer-cards reveal">
            <img src={team} alt=""></img>
            <div className="o-info">
              <h3>Team Collaboration</h3>
              <p>
                Can work as part of a team and has outstanding collaboration
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
