import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import AnimationContext from "../../context/AnimationContext";
import {
	Container,
	Bolder,
	ScrollDown,
	ScrollTitle,
	ArrowDown,
} from "../styles/Reusable.styled";
import {
	Section,
	Column,
	TextAnimated,
	BtnControl,
	StyledButton,
} from "./Me.styled";

gsap.registerPlugin(ScrollToPlugin);

const Me = () => {
	const { reveal } = useContext(AnimationContext);
	const sectionRef = useRef(null);

	// Reveal animation
	useEffect(() => {
		if (sectionRef.current) {
			reveal(sectionRef.current, { scrollTrigger: { start: "top 80%" } });
		}
	}, [reveal]);

	// Smooth scroll function
	const scrollToSection = (selector, offset = 0, duration = 1) => {
		const target = document.querySelector(selector);
		if (!target) return;

		const top =
			target.getBoundingClientRect().top + window.pageYOffset + offset;
		gsap.to(window, { duration, scrollTo: top, ease: "power1.inOut" });
	};

	return (
		<Container>
			<Section ref={sectionRef} style={{ opacity: 0 }}>
				<Column>
					<div>
						<h1>
							Hey, I'm <Bolder>Paul Pintang.</Bolder>
						</h1>
						<TextAnimated>I'm a Web Developer</TextAnimated>

						<BtnControl>
							<StyledButton
								red
								onClick={() => scrollToSection("#contacts", -100)}
							>
								Let's work together
							</StyledButton>

							<StyledButton onClick={() => scrollToSection("#projects", -100)}>
								Check out my projects
							</StyledButton>
						</BtnControl>
					</div>

					<ScrollDown onClick={() => scrollToSection("#services", -100)}>
						<ArrowDown />
						<ScrollTitle>scroll down</ScrollTitle>
					</ScrollDown>
				</Column>
			</Section>
		</Container>
	);
};

export default Me;
