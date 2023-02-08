import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// Components
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import ProjectsList from "./components/ProjectsList"
import ConnectWithMe from "./components/ConnectWithMe"
import Footer from "./components/Footer"
import Loading from "./assets/Loading"

function App() {
  const [projects, setProjects] = useState([]);
  const [isQuerying, setIsQuerying] = useState(false);

  useEffect(() => {
    // Set loading state
    setIsQuerying(true);
    fetch('/data/projects.json').catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProjects(data);

    // Disable loading state
    setIsQuerying(false);

    // On page refresh/data-load, scroll to the top of the page. 
    window.scrollTo(0, 0);
    })
  }, []);

  return (
    <div>
      {isQuerying && <LoadingIconWrapper />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <main>
          <Intro />
          <About />
          <ProjectsList projects={projects}/>
          <ConnectWithMe />
          <Footer />
        </main>
      </motion.div>
    </div>
  )
}

function LoadingIconWrapper() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-theme'>
      <Loading />
    </div>
  )
}

export default App
