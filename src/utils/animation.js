import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const scrollToSection = (id, offset = 105, duration = 0.8) => {
	const target = document.querySelector(`#${id}`);
	if (!target) return;

	gsap.to(window, {
		scrollTo: {
			y: target,
			offsetY: offset,
		},
		duration,
		ease: "power2.out",
	});
};

export const reveal = (target, options = {}) => {
	if (!target) return;

	gsap.fromTo(
		target,
		{ opacity: 0, y: 100 },
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			immediateRender: false,
			ease: "power3.out",
			scrollTrigger: {
				trigger: target,
				start: "top 80%",
			},
			...options,
		},
	);
};
