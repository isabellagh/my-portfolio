import Navbar from "./components/header/Navbar";
import About from "./components/body/about/About";
import Projects from "./components/body/projects/Projects";
import Skills from "./components/body/skills/Skills";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <About />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
