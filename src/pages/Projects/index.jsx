import React from "react";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import { Flex, Container, Span, Right } from "../styles/Reusable.styled.js";
import {
	Section,
	ProjectContainer,
	ProjectInfo,
	Description,
	LinkToProject,
} from "./Projects.styled";
import img1 from "../../assets/img/projects/1.png";
import img2 from "../../assets/img/projects/2.png";
import img3 from "../../assets/img/projects/3.png";
import img4 from "../../assets/img/projects/4.png";
import img5 from "../../assets/img/projects/5.png";
import img6 from "../../assets/img/projects/6.png";
import iknow from "../../assets/img/projects/iknow.png";
import hs from "../../assets/img/projects/hirestats.png";

const Projects = () => {
	return (
		<Section id="projects">
			<Container>
				<h2>
					My <Span>Projects</Span>
				</h2>
				<ProjectContainer>
					<div>
						<a
							href="https://hirestats.online/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={hs} alt="" />
						</a>
					</div>
					<ProjectInfo right>
						<div>
							<Right>
								<h4>
									No. <Span>01</Span>
								</h4>
							</Right>

							<h3>Hirestats</h3>
						</div>

						<Description>
							<p>
								Built my own full-stack SaaS web application to help job seekers
								track applications, interviews, and progress in real time.
								Designed a session-based tracking system with free and paid
								usage limits.
							</p>
						</Description>

						<Flex right>
							<small>Laravel</small>
							<small>Livewire</small>
							<small>Blade Templates</small>
							<small>MySQL</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://hirestats.online/"
									target="_blank"
									rel="noreferrer"
								>
									<FiExternalLink size={21} />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectInfo left>
						<div>
							<h4>
								No. <Span>02</Span>
							</h4>
							<h3>iKnow Academic Hub</h3>
						</div>

						<Description>
							<p>
								Educational website designed to promote and manage online
								academic review programs. The platform functions as a
								comprehensive learning and review center, helping students
								prepare for college entrance exams and strengthen academic
								mastery.
							</p>
						</Description>

						<Flex left>
							<small>React TS</small>
							<small>Redux</small>
							<small>Web Socket</small>
							<small>Express</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://iknowacademichub.com/"
									target="_blank"
									rel="noreferrer"
								>
									<FiExternalLink size={21} />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
					<div>
						<a
							href="https://iknowacademichub.com/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={iknow} alt="" />
						</a>
					</div>
				</ProjectContainer>

				<ProjectContainer>
					<div>
						<a
							href="https://traineetasker.up.railway.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={img1} alt="" />
						</a>
					</div>
					<ProjectInfo right>
						<div>
							<Right>
								<h4>
									No. <Span>03</Span>
								</h4>
							</Right>

							<h3>TraineeTasker</h3>
						</div>

						<Description>
							<p>
								An online platform that facilitates efficient task management
								and record-keeping for trainees, enabling seamless tracking of
								tasks, timesheets, and daily work records.
							</p>
						</Description>

						<Flex right>
							<small>React TS</small>
							<small>RTK Query</small>
							<small>Web Socket</small>
							<small>Express</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://github.com/PaulPintang/pixel8-traineetasker"
									target="_blank"
									rel="noreferrer"
								>
									<BsGithub />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectInfo left>
						<div>
							<h4>
								No. <Span>04</Span>
							</h4>
							<h3>Covid-19 Tracker V2</h3>
						</div>

						<Description>
							<p>
								A nicer look and another version of my covid tracker website
								built with React and Tailwind CSS. Added features include
								filtering by continents, top countries with active covid cases,
								and detailed covid stats by countries.
							</p>
						</Description>

						<Flex left>
							<small>React</small>
							<small>Tailwind CSS</small>
							<small>Javascript</small>
							<small>API</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://github.com/PaulPintang/covid19-tracker-v2"
									target="_blank"
									rel="noreferrer"
								>
									<BsGithub />
								</a>
							</li>
							<li>
								<a
									href="https://pincovid19-tracker-v2.netlify.app/"
									target="_blank"
									rel="noreferrer"
								>
									<FiExternalLink size={21} />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
					<div>
						<a
							href="https://pincovid19-tracker-v2.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={img2} alt="" />
						</a>
					</div>
				</ProjectContainer>

				<ProjectContainer>
					<div>
						<a
							href="https://hrc-store.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={img3} alt="" />
						</a>
					</div>
					<ProjectInfo right>
						<div>
							<Right>
								<h4>
									No. <Span>05</Span>
								</h4>
							</Right>

							<h3>HRC E-Commerce Store</h3>
						</div>

						<Description>
							<p>
								A clothing line business e-commerce store build using MERN
								Stack. Features such as email notification, order verification
								using OTP, order tracking, and shopping cart system.
							</p>
						</Description>

						<Flex right>
							<small>React TS</small>
							<small>Redux Toolkit</small>
							<small>MongoDB</small>
							<small>Express</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://hrc-store.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<FiExternalLink size={21} />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectInfo left>
						<div>
							<h4>
								No. <Span>06</Span>
							</h4>
							<h3>Portfolio Website</h3>
						</div>

						<Description>
							<p>
								This is the first portfolio website I designed and built in
								2021. As I was interested in learning React.js, I built it using
								React to enhance my understanding of the library.
							</p>
						</Description>

						<Flex left>
							<small>React</small>
							<small>Styled Components</small>
							<small>Javascript</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://github.com/PaulPintang/Portfolio"
									target="_blank"
									rel="noreferrer"
								>
									<BsGithub />
								</a>
							</li>
							<li>
								<a
									href="https://paulpintang.vercel.app"
									target="_blank"
									rel="noreferrer"
								>
									<FiExternalLink size={21} />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
					<div>
						<a
							href="https://paulpintang.vercel.app"
							target="_blank"
							rel="noreferrer"
						>
							<img src={img4} alt="" />
						</a>
					</div>
				</ProjectContainer>

				<ProjectContainer>
					<div>
						<a
							href="https://lingks.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={img5} alt="" />
						</a>
					</div>
					<ProjectInfo right>
						<div>
							<Right>
								<h4>
									No. <Span>07</Span>
								</h4>
							</Right>

							<h3>Lingks</h3>
						</div>

						<Description>
							<p>
								Bookmark web app built with MERN Stack, Redux Toolkit and with
								TypeScript. This helps to saved important links and make them
								easily to find if needed.
							</p>
						</Description>

						<Flex right>
							<small>React TS</small>
							<small>Redux Toolkit</small>
							<small>MongoDB</small>
							<small>Express</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://github.com/PaulPintang/lingks"
									target="_blank"
									rel="noreferrer"
								>
									<BsGithub />
								</a>
							</li>
							<li>
								<a
									href="https://lingks.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									<FiExternalLink size={21} />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
				</ProjectContainer>

				<ProjectContainer>
					<ProjectInfo left>
						<div>
							<Right>
								<h4>
									No. <Span>08</Span>
								</h4>
							</Right>

							<h3>Covid-19 Tracker V1</h3>
						</div>

						<Description>
							<p>
								This is my first project when I started studying web
								development. This is a simple covid tracker website with the use
								of API. This is the time I got interested in learning more about
								web development.
							</p>
						</Description>

						<Flex right>
							<small>HTML</small>
							<small>CSS</small>
							<small>Javascript</small>
							<small>API</small>
						</Flex>

						<LinkToProject>
							<li>
								<a
									href="https://github.com/PaulPintang/Covid-19-Tracker-App"
									target="_blank"
									rel="noreferrer"
								>
									<BsGithub />
								</a>
							</li>
							<li>
								<a
									href="https://paulpintang.github.io/Covid-19-Tracker-App/"
									target="_blank"
									rel="noreferrer"
								>
									<FiExternalLink size={21} />
								</a>
							</li>
						</LinkToProject>
					</ProjectInfo>
					<div>
						<a
							href="https://paulpintang.github.io/Covid-19-Tracker-App/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={img6} alt="" />
						</a>
					</div>
				</ProjectContainer>
			</Container>
		</Section>
	);
};

export default Projects;
