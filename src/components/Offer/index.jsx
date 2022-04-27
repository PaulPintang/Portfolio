import "./styles.css";
import { Section, OfferCards } from "./Offer.styled";
import responsive from "../../images/responsive.svg";
import design from "../../images/design.svg";
import team from "../../images/team.svg";

const Offer = () => {
  return (
    <Section id="services">
      <div className="container">
        <div className="offer-tag">
          <h2>
            What i <span>offer?</span>
          </h2>
          <p>Create positive user experience</p>
        </div>
        <div className="flex">
          <OfferCards className="reveal">
            <img src={responsive} alt=""></img>
            <div className="o-info">
              <h3>Responsive Website</h3>
              <p>
                Develop a responsive website layout for a better user experience
              </p>
            </div>
          </OfferCards>
          <OfferCards className="reveal">
            <img src={design} alt=""></img>
            <div className="o-info">
              <h3>Convert your design into a working website.</h3>
              <p>
                Make an ideal functional website with your mockups and UI
                prototypes.
              </p>
            </div>
          </OfferCards>
          <OfferCards className="reveal">
            <img src={team} alt=""></img>
            <div className="o-info">
              <h3>Team Collaboration</h3>
              <p>
                Can work as part of a team and has outstanding collaboration
                skills.
              </p>
            </div>
          </OfferCards>
        </div>
      </div>
    </Section>
  );
};

export default Offer;
