import React from "react";
import { AnimationProvider } from "./context/AnimationContext";
import Nav from "./components/Nav";
import Me from "./components/Me";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import GlobalStyles from "./components/styles/GlobalStyles";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <AnimationProvider>
        <GlobalStyles />
        <Nav />
        <Me />
        <Offer />
        <Skills />
        <Projects />
        <Experience />
        <Contacts />
        <Footer />
      </AnimationProvider>
    </div>
  );
}

export default App;
