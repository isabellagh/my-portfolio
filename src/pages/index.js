import React, {useState} from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";
import About from "../components/about";
import Projects from "../components/projects"
import Skills from "../components/skills"
// import Experience from "../components/experience"
import Contact from "../components/contact"
// import Body from "../components/body";
// import { homeObjOne } from "../components/body/Data";
import Footer from "../components/footer";

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
      {/* <Body {...homeObjOne}/> */}
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Contact />
      <Footer />
      
    </>
  );
};

export default Home;
