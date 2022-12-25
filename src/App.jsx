import Navbar from "./Navbar"
import Intro from "./Intro"

function About() {
  return (
    <div className="h-72 flex items-center py-8 px-9 bg-black text-white" id="About">
      I am a Finance and Information Systems student at the University of Washington. Learning is my passion!
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
    </div>
  )
}

export default App
