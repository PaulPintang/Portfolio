import React, { createContext } from "react";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const revealAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
    transition: all .8s ease;
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;
  return (
    <AnimationContext.Provider value={{ Reveal, revealAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export default AnimationContext;
