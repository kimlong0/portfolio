import Navbar from "./Navbar"
import Intro from "./Intro"

function About() {
  return (
    <div className="h-80 flex items-center py-8 px-9 bg-black" id="About">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-white">
          I am a Finance and Information Systems student at the University of Washington.
        </h3>
        <div className="bg-gradient-to-r from-[#FDD819] to-blue-400 bg-clip-text bg-400% animation-bg-animation">
          <p className="text-2xl font-bold text-transparent">Learning is my passion</p>
        </div>
      </div>
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
