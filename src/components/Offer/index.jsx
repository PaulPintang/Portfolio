import React from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

import { Container, Flex, Span, Center } from "../styles/Reusable.styled";
import { Section, OfferCards } from "./Offer.styled";
import responsive from "../../images/responsive.svg";
import design from "../../images/design.svg";
import team from "../../images/team.svg";

const Offer = () => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
  return (
    <Container id="services">
      <Section>
        <Center>
          <h2>
            What i <Span>offer?</Span>
          </h2>
          <p>Create positive user experience</p>
        </Center>
        <Flex>
          <Reveal keyframes={customAnimation}>
            <OfferCards className="">
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
          <OfferCards className="">
            <Center>
              <img src={design} alt="" />
              <h3>Convert your design into a working website.</h3>
              <p>
                Make an ideal functional website with your mockups and UI
                prototypes.
              </p>
            </Center>
          </OfferCards>
          <Reveal keyframes={customAnimation}>
            <OfferCards className="">
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
