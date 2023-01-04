import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Intro from "./Intro"
import About from "./components/About"
import ProjectsList from "./components/ProjectsList"

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
