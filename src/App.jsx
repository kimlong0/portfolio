import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import ProjectsList from "./components/ProjectsList"
import ConnectWithMe from "./components/ConnectWithMe"
import Footer from "./components/Footer"

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
      <ConnectWithMe />
      <Footer />
    </div>
  )
}

export default App
