import { useLayoutEffect, useRef } from "react";
import {
	Container,
	Flex,
	Span,
	Center,
	SectionDescription,
} from "../styles/Reusable.styled";
import { Section, OfferCards } from "./Offer.styled";
import responsive from "../../assets/svg/responsive.svg";
import design from "../../assets/svg/design.svg";
import team from "../../assets/svg/team.svg";
import { reveal } from "../../utils/animation";

const Offer = () => {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		if (sectionRef.current) reveal(sectionRef.current);
	}, []);

	return (
		<Section id="services" ref={sectionRef} className="reveal">
			<Container>
				<Center paddingBottom="60px">
					<h2>
						What I <Span>Offer</Span>
					</h2>
					<SectionDescription>
						Building complete, scalable web applications
					</SectionDescription>
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
			</Container>
		</Section>
	);
};

export default Offer;
