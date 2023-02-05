import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import About from "./components/About"
import ProjectsList from "./components/ProjectsList"
import ConnectWithMe from "./components/ConnectWithMe"
import Footer from "./components/Footer"

function App() {
  const [projects, setProjects] = useState([]);

  let { scrollYProgress } = useScroll();
  let x = useTransform(scrollYProgress, [0, 0.5], [100,  -100]);

  useEffect(() => {
    fetch('/data/projects.json').catch((error) => {
      console.log(error);
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProjects(data);

      // On page refresh/data-load, scroll to the top of the page. 
      window.scrollTo(0, 0);
    })
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Intro />
      <About />
      <ProjectsList projects={projects}/>
      <ConnectWithMe />
      <Footer />
    </motion.div>
  )
}

export default App
