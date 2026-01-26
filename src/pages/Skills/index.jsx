import { useLayoutEffect, useRef } from "react";
import { reveal } from "../../utils/animation";
import {
	Center,
	Container,
	SectionDescription,
	Span,
} from "../styles/Reusable.styled";
import { Section, FlexContainer, ImgContainer } from "./Skills.styled";
import html from "../../assets/img/skills/html.svg";
import css from "../../assets/img/skills/css-3.svg";
import twc from "../../assets/img/skills/tailwindcss.svg";
import sass from "../../assets/img/skills/sass.svg";
import gsap from "../../assets/img/skills/gsap.jpeg";
import js from "../../assets/img/skills/javascript.svg";
import ts from "../../assets/img/skills/typescript.png";
import node from "../../assets/img/skills/nodejs.png";
import express from "../../assets/img/skills/express.png";
import mongo from "../../assets/img/skills/mongodb.svg";
import mysql from "../../assets/img/skills/mysql.png";
import wordpress from "../../assets/img/skills/wordpress.jpeg";
import php from "../../assets/img/skills/php.jpeg";
import laravel from "../../assets/img/skills/laravel.jpeg";
import livewire from "../../assets/img/skills/livewire.png";
import git from "../../assets/img/skills/git.svg";
import react from "../../assets/img/skills/react.png";
import redux from "../../assets/img/skills/redux.png";
import mantine from "../../assets/img/skills/mantine.svg";
import styled from "../../assets/img/skills/sc.png";

const Skills = () => {
	const sectionRef = useRef(null);

	useLayoutEffect(() => {
		if (sectionRef.current) reveal(sectionRef.current);
	}, []);

	return (
		<Section ref={sectionRef} className="reveal">
			<Container>
				<Center paddingBottom="60px">
					<h2>
						My <Span>Skills</Span>
					</h2>
					<SectionDescription>
						Technologies and tools I use to build web applications.
					</SectionDescription>
				</Center>

				<FlexContainer justify>
					<ImgContainer>
						<Center>
							<img src={html} alt=""></img>
							<p>HTML5</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={css} alt=""></img>
							<p>CSS</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={twc} alt="" style={{ width: 50 }}></img>
							<p>Tailwind</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={sass} alt=""></img>
							<p>Sass</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={styled} alt=""></img>
							<p>Styled</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={gsap} alt=""></img>
							<p>GSAP</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={mantine} alt=""></img>
							<p>Mantine</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={js} alt=""></img>
							<p>JavaScript</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={ts} alt=""></img>
							<p>TypeScript</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={php} alt=""></img>
							<p>PHP</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={wordpress} alt=""></img>
							<p>Wordpress</p>
						</Center>
					</ImgContainer>

					<ImgContainer>
						<Center>
							<img src={git} alt=""></img>
							<p>Git</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={react} alt=""></img>
							<p>React.Js</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={redux} alt=""></img>
							<p>Redux</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={mongo} alt=""></img>
							<p>MongoDB</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={mysql} alt=""></img>
							<p>MySQL</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={express} alt=""></img>
							<p>Express.Js</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={node} alt=""></img>
							<p>Node.Js</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={laravel} alt=""></img>
							<p>Laravel</p>
						</Center>
					</ImgContainer>
					<ImgContainer>
						<Center>
							<img src={livewire} alt=""></img>
							<p>Livewire</p>
						</Center>
					</ImgContainer>
				</FlexContainer>
			</Container>
		</Section>
	);
};

export default Skills;
