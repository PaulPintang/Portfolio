import { useLayoutEffect, useRef } from "react";
import { reveal, scrollToSection } from "../../utils/animation";

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

const Me = () => {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		if (sectionRef.current) reveal(sectionRef.current, { delay: 0.3 });
	}, []);

	return (
		<Section ref={sectionRef}>
			<Container>
				<Column>
					<div>
						<h1>
							Hey, I'm <Bolder>Paul Pintang.</Bolder>
						</h1>
						<TextAnimated>I'm a Web Developer</TextAnimated>

						<BtnControl>
							<StyledButton red onClick={() => scrollToSection("contacts")}>
								Let's work together
							</StyledButton>

							<StyledButton onClick={() => scrollToSection("projects")}>
								Check out my projects
							</StyledButton>
						</BtnControl>
					</div>

					<ScrollDown onClick={() => scrollToSection("services")}>
						<ArrowDown />
						<ScrollTitle>scroll down</ScrollTitle>
					</ScrollDown>
				</Column>
			</Container>
		</Section>
	);
};

export default Me;
