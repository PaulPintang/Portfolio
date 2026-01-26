import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { AnimationProvider } from "./context/AnimationContext";
import Nav from "./pages/Nav";
import Me from "./pages/Me";
import Offer from "./pages/Offer";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import GlobalStyles from "./pages/styles/GlobalStyles";
import Experience from "./pages/Experience";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
	useEffect(() => {
		const ctx = gsap.context(() => {
			const smoother = ScrollSmoother.create({
				wrapper: "#smooth-wrapper",
				content: "#smooth-content",
				smooth: 1.2,
				effects: true,
				normalizeScroll: true,
			});

			// Update ScrollTrigger on resize
			ScrollTrigger.addEventListener("refreshInit", () => smoother.refresh());
		});

		return () => ctx.revert();
	}, []);

	return (
		<div id="smooth-wrapper">
			<Nav />
			<div id="smooth-content">
				<AnimationProvider>
					<GlobalStyles />
					<Me />
					<Offer />
					<Skills />
					<Projects />
					<Experience />
					<Contacts />
					<Footer />
				</AnimationProvider>
			</div>
		</div>
	);
}

export default App;
