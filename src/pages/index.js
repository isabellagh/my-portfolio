import React, {useState} from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import About from "../components/about";
import Projects from "../components/projects"
import Skills from "../components/skills"
import Experience from "../components/experience"
import Contact from "../components/contact"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
