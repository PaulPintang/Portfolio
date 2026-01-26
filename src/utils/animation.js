import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const scrollToSection = (id, offset = -105, duration = 0.8) => {
	const target = document.querySelector(`#${id}`);
	if (!target) return;

	const scroll = () => {
		// Refresh ScrollTrigger to make sure positions are correct
		ScrollTrigger.refresh();

		const top =
			target.getBoundingClientRect().top + window.pageYOffset + offset;
		gsap.to(window, {
			scrollTo: top,
			duration,
			ease: "power2.out",
		});
	};

	if (document.readyState === "complete") {
		scroll();
	} else {
		window.addEventListener("load", scroll, { once: true });
	}
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
			ease: "power3.out",
			scrollTrigger: {
				trigger: target,
				start: "top 80%",
				...options.scrollTrigger,
			},
		},
	);
};
