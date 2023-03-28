import React from "react";
import { AnimationProvider } from "./context/AnimationContext";
import Nav from "./pages/Nav";
import Me from "./pages/Me";
import Offer from "./pages/Offer";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import GlobalStyles from "./pages/styles/GlobalStyles";

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
