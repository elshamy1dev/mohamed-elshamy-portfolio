import React from "react";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Nav from "./component/nav/Nav";
import Skills from "./component/skills/Skills";
import Services from "./component/services/Services";
import Projects from "./component/projects/Projects";
import Contacts from "./component/contact/Contacts";
import Footer from "./component/footer/Footer";

function App() {


  return (
    <div>
        <Home />
        <Nav />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contacts />
        <Footer />
      </div>
  );
}

export default App;
