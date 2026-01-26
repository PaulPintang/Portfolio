import React, { useRef, useEffect, useContext } from "react";
import { reveal } from "../../utils/animation";

import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import {
	Flex,
	Container,
	Span,
	Right,
	Center,
	SectionDescription,
} from "../styles/Reusable.styled";
import {
	Section,
	ProjectContainer,
	ProjectInfo,
	Description,
	LinkToProject,
} from "./Projects.styled";
import { projectsData } from "./projects";

const Projects = () => {
	const projectRefs = useRef([]);
	const sectionRef = useRef(null);

	useEffect(() => {
		if (sectionRef.current) reveal(sectionRef.current);

		projectRefs.current.forEach((ref, index) => {
			if (ref && index !== 0) reveal(ref); // skip first
		});
	}, []);

	return (
		<Section id="projects" ref={sectionRef}>
			<Container>
				<Center paddingBottom="60px">
					<h2>
						My <Span>Projects</Span>
					</h2>
					<SectionDescription>
						Some of the web applications and projects I’ve built recently.
					</SectionDescription>
				</Center>

				{projectsData.map((project, index) => (
					<ProjectContainer
						key={project.id}
						ref={(el) => (projectRefs.current[index] = el)}
					>
						{project.right ? (
							<>
								<div>
									<a
										href={project.link || project.github}
										target="_blank"
										rel="noreferrer"
									>
										<img src={project.img} alt={project.title} />
									</a>
								</div>

								<ProjectInfo right>
									<div>
										<Right>
											<h4>
												No.{" "}
												<Span>{project.id.toString().padStart(2, "0")}</Span>
											</h4>
										</Right>
										<h3>{project.title}</h3>
									</div>

									<Description>
										<p>{project.description}</p>
									</Description>

									<Flex right>
										{project.tech.map((tech) => (
											<small key={tech}>{tech}</small>
										))}
									</Flex>

									<LinkToProject>
										{project.github && (
											<li>
												<a
													href={project.github}
													target="_blank"
													rel="noreferrer"
												>
													<BsGithub size={21} />
												</a>
											</li>
										)}
										{project.link && (
											<li>
												<a href={project.link} target="_blank" rel="noreferrer">
													<FiExternalLink size={21} />
												</a>
											</li>
										)}
									</LinkToProject>
								</ProjectInfo>
							</>
						) : (
							<>
								<ProjectInfo left>
									<div>
										<h4>
											No. <Span>{project.id.toString().padStart(2, "0")}</Span>
										</h4>
										<h3>{project.title}</h3>
									</div>

									<Description>
										<p>{project.description}</p>
									</Description>

									<Flex left>
										{project.tech.map((tech) => (
											<small key={tech}>{tech}</small>
										))}
									</Flex>

									<LinkToProject>
										{project.github && (
											<li>
												<a
													href={project.github}
													target="_blank"
													rel="noreferrer"
												>
													<BsGithub size={21} />
												</a>
											</li>
										)}
										{project.link && (
											<li>
												<a href={project.link} target="_blank" rel="noreferrer">
													<FiExternalLink size={21} />
												</a>
											</li>
										)}
									</LinkToProject>
								</ProjectInfo>

								<div>
									<a
										href={project.link || project.github}
										target="_blank"
										rel="noreferrer"
									>
										<img src={project.img} alt={project.title} />
									</a>
								</div>
							</>
						)}
					</ProjectContainer>
				))}
			</Container>
		</Section>
	);
};

export default Projects;
