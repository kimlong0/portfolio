import { motion, useScroll, useTransform } from "framer-motion"

function Intro() {
  let { scrollYProgress } = useScroll();
  let x = useTransform(scrollYProgress, [0.18, 0.6], ["50%",  "-500%"]);
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  let opacity = useTransform(scrollYProgress, [0, 0.25, 0.3], [ 1, 1, 0]);
  // const transformValue = props.transformValue;
  // console.log(transformValue);

  return (
    <div>
      <motion.div
        initial={{ y: -250 }} 
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="bg-gray-theme rounded-b-5xl relative z-[-1]"
        style={{ y, opacity }}>
        <div className="h-20"></div>
        <div className="flex flex-col md:flex-row h-[calc(100vh_-_15rem)] justify-center items-center p-4 mb-1">
            <h1 className="text-4xl md:text-6xl font-bold text-center py-8 px-9 bg-gradient-to-r from-[#2ca2b4] via-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Hello World</h1>
            <div className="max-w-xl">
                <img src="images/paint-explosion.png" className="rounded-3xl"></img>
            </div>
        </div>
      </motion.div>

      <div className="flex items-center justify-end h-screen bg-lime-200 rounded-5xl border-2 border-black">
        <motion.h1 className="text-4xl md:text-6xl font-bold" style={{ x }}>Explore With Me</motion.h1>
      </div>
    </div>
  )
}

export default Intro