import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useLayoutEffect} from "react";

function Intro() {
  const sectionRef = useRef();
  // console.log('height', sectionRef.current ? sectionRef.current.getBoundingClientRect() : 0);
  
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress)
  // Stores the start and end scrolling position for our container
  const [scrollPercentageStart, setScrollPercentageStart] = useState(null);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(null);
  // console.log(scrollPercentageStart)
  // console.log(scrollPercentageEnd)

  useLayoutEffect(() => {
    // Get the distance from the start of the page to the element start
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const offsetStart = rect.top + scrollTop;
    const offsetEnd = (rect.top + rect.height);
    
    const elementScrollStart = offsetStart / document.body.clientHeight;
    const elementScrollEnd = offsetEnd / document.body.clientHeight;
    setScrollPercentageStart(elementScrollStart);
    setScrollPercentageEnd(elementScrollEnd);
  });

  
  // Top section animation
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.40], [ 1, 1, 0]);

  // Bottom section animation
  const x = useTransform(scrollYProgress, [0.05, 0.25], ["0vw", "20vw"]);
  const rotate = useTransform(scrollYProgress, [0.15, 0.6], [0, 540]);
  const backgroundColor = useTransform(scrollYProgress, [0.15, 0.2], ["#000", "#001"])


  const iconAnimate = {
    offScreen: { x: -150 },
    onScreen: { 
      x: 200,
      y: 100,
      transition: {type: "spring"}}
  }

  return (
    <div>
      <motion.div
        initial={{ y: -250 }} 
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="bg-gray-theme rounded-b-5xl relative z-[-1] pt-20"
        style={{ y, opacity }}>
        <div className="flex flex-col sm:flex-row h-[calc(100vh_-_15rem)] justify-center items-center p-4 mb-1">
            <h1 className="text-4xl sm:text-6xl font-bold text-center py-8 px-9 bg-gradient-to-r from-[#2ca2b4] via-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Hello World</h1>
            <div className="max-w-xl overflow-hidden rounded-3xl">
                <img src="images/paint-explosion.png"></img>
            </div>
        </div>
      </motion.div>

      <motion.div 
        className="relative flex items-center h-screen bg-black rounded-5xl border-2 border-[#2ca2b4] truncate"
        style={{ }}
        ref={sectionRef}>
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-lime-300 rounded-3xl"
          style={{ rotate }}/>
        <motion.h1 className="text-4xl md:text-6xl font-bold text-[#2ca2b4]" style={{ x }}>Explore With Me</motion.h1>
        {/* <motion.img
          initial={"offScreen"}
          animate={"onScreen"}
          variants={iconAnimate}
          src="images/icons/react.svg" width="24" alt="react" className="absolute top-32 left-0" /> */}
      </motion.div>
    </div>
  )
}

export default Intro