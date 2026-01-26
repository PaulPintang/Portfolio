import React from "react";
import { Span } from "../styles/Reusable.styled";
import {
	WorkContainer,
	WorkContent,
	FlexContent,
	Tools,
	Badge,
} from "./Experience.styled";
const Experience = () => {
	return (
		<WorkContainer id="experience">
			<h2>
				Work <Span>Experience</Span>
			</h2>
			<WorkContent>
				<FlexContent nogap>
					<h3>iKnow Academic Hub</h3>
					<h3>Jan 2025 - Aug 2025</h3>
				</FlexContent>
				<FlexContent containmobile>
					<section>
						<h4>Full-Stack Developer</h4>
						<p>
							Designed and implemented RESTful APIs to support core application
							features and data flow. Developed a custom WordPress theme from
							the ground up, translating design requirements into a fully
							responsive and user-friendly website.
						</p>
						<Tools>
							<Badge>
								<small>Javascript</small>
							</Badge>
							<Badge>
								<small>React</small>
							</Badge>

							<Badge>
								<small>Wordpress</small>
							</Badge>
							<Badge>
								<small>GSAP Animation</small>
							</Badge>
							<Badge>
								<small>SCSS</small>
							</Badge>
						</Tools>
					</section>
				</FlexContent>
			</WorkContent>
			<WorkContent>
				<FlexContent nogap>
					<h3>Dotty Solutions Inc.</h3>
					<h3>Sept 2023 - Nov 2024</h3>
				</FlexContent>
				<FlexContent containmobile>
					<section>
						<h4>Front-End Developer</h4>
						<p>
							Managed, maintained, and updated multiple WordPress websites,
							ensuring security, performance optimization, and content accuracy.
							Performed ongoing website updates, bug fixes, and enhancements to
							improve usability and stability.
						</p>
						<Tools>
							<Badge>
								<small>Javascript</small>
							</Badge>
							<Badge>
								<small>React</small>
							</Badge>

							<Badge>
								<small>Wordpress</small>
							</Badge>
							<Badge>
								<small>GSAP Animation</small>
							</Badge>
							<Badge>
								<small>SCSS</small>
							</Badge>
						</Tools>
					</section>
				</FlexContent>
			</WorkContent>
			<WorkContent>
				<FlexContent nogap>
					<h3>Pixel8 Web Solutions & Consultancy Inc.</h3>
					<h3>Feb 2022 - May 2022</h3>
				</FlexContent>
				<FlexContent containmobile>
					<section>
						<h4>Web Developer Intern</h4>
						<p>
							Developing front-end features, responsive designs, writing clean
							code, and convert Adobe XD UI designs on Vue.Js and Quasar
							Frameworks.
						</p>
						<Tools>
							<Badge>
								<small>Javascript</small>
							</Badge>
							<Badge>
								<small>Vue</small>
							</Badge>

							<Badge>
								<small>Quasar Framework</small>
							</Badge>
							<Badge>
								<small>SCSS</small>
							</Badge>
						</Tools>
					</section>
				</FlexContent>
			</WorkContent>
			<WorkContent>
				<FlexContent nogap>
					<h3>Snack Software, LLC</h3>
					<h3>July 2021 - Aug 2021</h3>
				</FlexContent>
				<FlexContent containmobile>
					<section>
						<h4>Front-End Developer Intern</h4>
						<p>
							Responsible for coding the front-end designs, converting the given
							UI mockups, and maintain a fast and easily maintainable code base
							of the project.
						</p>
						<Tools style={{ display: "flex", gap: 10, paddingTop: 5 }}>
							<Badge>
								<small>Javascript</small>
							</Badge>
							<Badge>
								<small>React</small>
							</Badge>

							<Badge>
								<small>Material UI</small>
							</Badge>
							<Badge>
								<small>Tailwind CSS</small>
							</Badge>
						</Tools>
					</section>
				</FlexContent>
			</WorkContent>
		</WorkContainer>
	);
};

export default Experience;
