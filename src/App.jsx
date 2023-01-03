import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Intro from "./Intro"
import ProjectsList from "./components/ProjectsList"

function About() {
  return (
    <div className="h-1/2 flex flex-col sm:flex-row justify-around items-center py-8 px-9 bg-black" id="About">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-white">
          I am a Finance and Information Systems student at the University of Washington.
        </h3>
        <div className="bg-gradient-to-r from-[#FDD819] to-blue-400 bg-clip-text bg-400% animation-bg-animation">
          <p className="text-2xl font-bold text-transparent">Learning is my passion</p>
        </div>
      </div>
      <img src="images/Profile-Pic.jpg" className="shrink-0 h-48 w-48 my-8 rounded-full object-cover"></img>
    </div>
  )
}

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json').catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProjects(data);
    })
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <ProjectsList projects={projects}/>
    </div>
  )
}

export default App
