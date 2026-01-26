import { useContext, useEffect, useRef } from "react";
import AnimationContext from "../../context/AnimationContext";
import { Container, Flex, Span, Center } from "../styles/Reusable.styled";
import { Section, OfferCards } from "./Offer.styled";
import responsive from "../../assets/svg/responsive.svg";
import design from "../../assets/svg/design.svg";
import team from "../../assets/svg/team.svg";

const Offer = () => {
	const { reveal } = useContext(AnimationContext);
	const sectionRef = useRef(null);

	useEffect(() => {
		if (sectionRef.current) reveal(sectionRef.current);
	}, [reveal]);

	return (
		<Container>
			<Section id="services" ref={sectionRef}>
				<Center paddingBottom="10px">
					<h2>
						What I <Span>Offer</Span>
					</h2>
					<p>Building complete, scalable web applications</p>
				</Center>
				<Flex justify>
					<OfferCards className="offer-card">
						<Center>
							<img src={responsive} alt="" />
							<h3>Full-Stack Web Applications</h3>
							<p>
								Implement complete web applications including frontend logic,
								backend APIs, and database integration.
							</p>
						</Center>
					</OfferCards>
					<OfferCards className="offer-card">
						<Center>
							<img src={design} alt="" />
							<h3>Frontend & Backend Integration</h3>
							<p>
								Convert UI designs into fully functional systems with APIs,
								authentication, and database integration.
							</p>
						</Center>
					</OfferCards>
					<OfferCards className="offer-card">
						<Center>
							<img src={team} alt="" />
							<h3>Scalable Solutions</h3>
							<p>
								Build clean, maintainable, and scalable applications that are
								easy to extend and collaborate on.
							</p>
						</Center>
					</OfferCards>
				</Flex>
			</Section>
		</Container>
	);
};

export default Offer;
