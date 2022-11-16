import React, { useContext } from "react";
import AnimationContext from "../../context/AnimationContext";
import { Container, Flex, Span, Center } from "../styles/Reusable.styled";
import { Section, OfferCards } from "./Offer.styled";
import responsive from "../../assets/svg/responsive.svg";
import design from "../../assets/svg/design.svg";
import team from "../../assets/svg/team.svg";

const Offer = () => {
  const { Reveal, revealAnimation } = useContext(AnimationContext);
  return (
    <Container id="services">
      <Section>
        <Center>
          <h2>
            What i <Span>offer?</Span>
          </h2>
          <p>Create positive user experience</p>
        </Center>
        <Flex justify>
          <Reveal keyframes={revealAnimation}>
            <OfferCards>
              <Center>
                <img src={responsive} alt="" />
                <h3>Responsive Website</h3>
                <p>
                  Develop a responsive website layout for a better user
                  experience
                </p>
              </Center>
            </OfferCards>
          </Reveal>
          <Reveal keyframes={revealAnimation}>
            <OfferCards>
              <Center>
                <img src={design} alt="" />
                <h3>Convert your design into a working website.</h3>
                <p>
                  Make an ideal functional website with your mockups and UI
                  prototypes.
                </p>
              </Center>
            </OfferCards>
          </Reveal>
          <Reveal keyframes={revealAnimation}>
            <OfferCards>
              <Center>
                <img src={team} alt="" />
                <h3>Team Collaboration</h3>
                <p>
                  Can work as part of a team and has outstanding collaboration
                  skills.
                </p>
              </Center>
            </OfferCards>
          </Reveal>
        </Flex>
      </Section>
    </Container>
  );
};

export default Offer;
