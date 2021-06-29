import "./App.css";
import Nav from "./components/Nav";
import Me from "./components/Me";
import Offer from "./components/Offer";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div className="bg">
      <Nav />
      <Me />
      <Offer />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

// Navigation
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 530
  ) {
    document.querySelector(".nav-h").style.cssText =
      "height:66px; transition: all .3s ease; ";
    document.querySelector("header").style.cssText =
      "box-shadow: 0 2px 4px -1px rgba(0,0,0,0.25);";
  } else {
    document.querySelector(".nav-h").style.cssText = "height:120px;";
    document.querySelector("header").style.cssText = "box-shadow: unset;";
  }
}

export default App;
