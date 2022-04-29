import "./styles.css";
import { Container, Flex, Span } from "../styles/Reusable.styled";
import { Section, OfferCards } from "./Offer.styled";
import responsive from "../../images/responsive.svg";
import design from "../../images/design.svg";
import team from "../../images/team.svg";

const Offer = () => {
  return (
    <Container>
      <Section>
        <div>
          <h2>
            What i <Span>offer?</Span>
          </h2>
          <p>Create positive user experience</p>
        </div>

        <Flex>
          {/* <OfferCards className="reveal"></OfferCards>
          <OfferCards className="reveal"></OfferCards>
          <OfferCards className="reveal"></OfferCards> */}
          test
        </Flex>
      </Section>
    </Container>
  );
};

export default Offer;
