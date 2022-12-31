import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Intro from "./Intro"

function ProjectCard(props) {
  const project = props.project;
  console.log(project);
  return (
    <div className="w-4/5 h-96 bg-gray-300 rounded-4xl">
      <div>
        <img src={`/images${project.img}`}></img>
      </div>
    </div>
  )
}

function Projects(props) {
  const projects = props.projects;
  const projectList = projects.map((project) => <ProjectCard key={project.name} project={project}/>)

  return (
    <div className="py-8 px-9 flex flex-col items-center">
      <h2 className="text-2xl pb-8 font-bold bg-gradient-to-r from-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Some of my Projects</h2>
      {projectList}
    </div>
  )
}

function About() {
  return (
    <div className="h-1/2 flex flex-col md:flex-row justify-between items-center py-8 px-9 bg-black" id="About">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-white">
          I am a Finance and Information Systems student at the University of Washington.
        </h3>
        <div className="bg-gradient-to-r from-[#FDD819] to-blue-400 bg-clip-text bg-400% animation-bg-animation">
          <p className="text-2xl font-bold text-transparent">Learning is my passion</p>
        </div>
      </div>
      <img src="images/Profile-Pic.jpg" className="h-48 w-48 my-8 rounded-full object-cover"></img>
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
      <Projects projects={projects}/>
    </div>
  )
}

export default App
