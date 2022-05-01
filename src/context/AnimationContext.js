import React, { createContext } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const revealAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
  return (
    <AnimationContext.Provider value={{ Reveal, revealAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationContext;
