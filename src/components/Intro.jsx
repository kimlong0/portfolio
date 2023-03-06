import { motion, useScroll, useTransform } from "framer-motion";
import { useRef} from "react";

function Intro() {
  const sectionRef = useRef();
  
  const { scrollYProgress } = useScroll();
  
  // Top section animation
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.355], [ 1, 1, 0]);

  // Bottom section animation
  const x = useTransform(scrollYProgress, [0.05, 0.25], ["0vw", "15vw"]);
  const rotate = useTransform(scrollYProgress, [0.15, 0.6], [0, 540]);

  return (
    <div>
      <motion.div
        initial={{ y: -250 }} 
        animate={{ y: 0 }}
        transition={{ease: "anticipate", duration: 2 }}
        className="bg-gray-theme rounded-b-5xl relative z-[-1] pt-20"
        style={{ y, opacity }}>
        <div className="flex flex-col sm:flex-row h-[calc(100vh_-_15rem)] justify-center items-center p-4 mb-1">
            <h1 className="text-4xl sm:text-6xl font-bold text-center py-8 px-9 min-w-max bg-gradient-to-r from-[#2ca2b4] via-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Hello World</h1>
            <div className="max-w-xl overflow-hidden rounded-3xl">
                <img src="images/paint-explosion.png"></img>
            </div>
        </div>
      </motion.div>

      <div 
        className="relative flex items-center h-screen bg-black rounded-5xl border-2 border-[#2ca2b4] truncate"
        ref={sectionRef}>
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-[#b9dcf2] to-[#f6cfbe] rounded-3xl"
          style={{ rotate }}/>
        <motion.h1 className="text-4xl md:text-6xl font-bold text-[#2ca2b4]" style={{ x }}>I'm Kimlong Nguyen</motion.h1>
        {/* <motion.img src="images/icons/react.svg" width="24" alt="react" className="absolute top-64 left-56" /> */}
      </div>
    </div>
  )
}

export default Intro