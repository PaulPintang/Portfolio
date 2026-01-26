import React, { createContext } from "react";
import gsap from "gsap";

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
	const reveal = (target, options = {}) => {
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

	return (
		<AnimationContext.Provider value={{ reveal }}>
			{children}
		</AnimationContext.Provider>
	);
}

export default AnimationContext;
