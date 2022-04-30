import "./App.css";
import Nav from "./components/Nav";
import Me from "./components/Me";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import GlobalStyles from "./components/styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      {/* <Nav /> */}
      <Me />
      <Offer />
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Contacts /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
