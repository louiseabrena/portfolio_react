import "./App.css";

import Project from "./components/Project";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="page">
      <Header />
      <div id="jumpSection">
        <a href="#About">About</a>
        <a href="#Skill">Skill</a>
        <a href="#Project">Projects</a>
        <a href="#Education">Educations</a>
        <a href="#Contact">Contact</a>
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skill">
        <Skill />
      </div>
      <div id="Project">
        <Project />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div id="returntoTop">
        <a href="/">Return to top</a>
      </div>
      <Footer />
    </div>
  );
}

export default App;
