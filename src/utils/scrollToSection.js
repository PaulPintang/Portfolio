import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (id, offset = -105, duration = 0.8) => {
	const target = document.querySelector(`#${id}`);
	if (!target) return;

	const top = target.getBoundingClientRect().top + window.pageYOffset + offset;

	gsap.to(window, {
		scrollTo: top,
		duration,
		ease: "power2.out",
	});
};
