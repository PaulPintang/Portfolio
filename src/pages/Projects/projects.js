import img1 from "../../assets/img/projects/1.png";
import img2 from "../../assets/img/projects/2.png";
import img3 from "../../assets/img/projects/3.png";
import img4 from "../../assets/img/projects/4.png";
import img5 from "../../assets/img/projects/5.png";
import img6 from "../../assets/img/projects/6.png";
import iknow from "../../assets/img/projects/iknow.png";
import hs from "../../assets/img/projects/hirestats.png";

export const projectsData = [
	{
		id: 1,
		title: "Hirestats",
		description:
			"Built my own full-stack SaaS web application to help job seekers track applications, interviews, and progress in real time. Designed a session-based tracking system with free and paid usage limits.",
		img: hs,
		tech: ["Laravel", "Livewire", "Blade Templates", "MySQL"],
		link: "https://hirestats.online/",
		external: true,
		right: true,
	},
	{
		id: 2,
		title: "iKnow Academic Hub",
		description:
			"Educational website developed for a client to promote and manage online academic review programs. The platform functions as a comprehensive learning and review center, helping students prepare for exams and strengthen academic mastery.",
		img: iknow,
		tech: ["React TS", "Redux", "Web Socket", "Express"],
		link: "https://iknowacademichub.com/",
		external: true,
		right: false,
	},
	{
		id: 3,
		title: "TraineeTasker",
		description:
			"An online platform that facilitates efficient task management and record-keeping for trainees, enabling seamless tracking of tasks, timesheets, and daily work records.",
		img: img1,
		tech: ["React TS", "RTK Query", "Web Socket", "Express"],
		github: "https://github.com/PaulPintang/pixel8-traineetasker",
		external: false,
		right: true,
	},
	{
		id: 4,
		title: "Covid-19 Tracker V2",
		description:
			"A nicer look and another version of my covid tracker website built with React and Tailwind CSS. Added features include filtering by continents, top countries with active covid cases, and detailed covid stats by countries.",
		img: img2,
		tech: ["React", "Tailwind CSS", "Javascript", "API"],
		link: "https://pincovid19-tracker-v2.netlify.app/",
		external: true,
		github: "https://github.com/PaulPintang/covid19-tracker-v2",
		right: false,
	},
	{
		id: 5,
		title: "HRC E-Commerce Store",
		description:
			"E-commerce store for a clothing line built from scratch using the MERN Stack. Features include a full shopping cart system, email notifications, OTP-based order verification, and an admin panel for managing products and orders. Created to help the client transition from a Facebook-only presence to a fully functional online store.",
		img: img3,
		tech: ["React TS", "Redux Toolkit", "MongoDB", "Express"],
		link: "https://hrc-store.vercel.app/",
		external: true,
		right: true,
	},
	{
		id: 6,
		title: "Portfolio Website",
		description:
			"This is the first portfolio website I designed and built in 2021. I built it using React to enhance my understanding of the library.",
		img: img4,
		tech: ["React", "Styled Components", "Javascript"],
		link: "https://paulpintang.vercel.app",
		external: true,
		github: "https://github.com/PaulPintang/Portfolio",
		right: false,
	},
	{
		id: 7,
		title: "Lingks",
		description:
			"Bookmark web app built with MERN Stack, Redux Toolkit, and TypeScript. Helps users save important links and easily find them when needed.",
		img: img5,
		tech: ["React TS", "Redux Toolkit", "MongoDB", "Express"],
		link: "https://lingks.vercel.app/",
		external: true,
		github: "https://github.com/PaulPintang/lingks",
		right: true,
	},
	{
		id: 8,
		title: "Covid-19 Tracker V1",
		description:
			"This is my first project when I started studying web development. A simple covid tracker website using API, which sparked my interest in web development.",
		img: img6,
		tech: ["HTML", "CSS", "Javascript", "API"],
		link: "https://paulpintang.github.io/Covid-19-Tracker-App/",
		external: true,
		github: "https://github.com/PaulPintang/Covid-19-Tracker-App",
		right: false,
	},
];
