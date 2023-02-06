import { motion, useScroll, useTransform } from "framer-motion"

function Intro() {
  let { scrollYProgress } = useScroll();
  let x = useTransform(scrollYProgress, [0.15, 0.6], ["-100%",  "700%"]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.40], [ 1, 1, 0]);
  // const transformValue = props.transformValue;
  // console.log(transformValue);

  return (
    <div>
      {/* <div className="h-20 bg-gray-theme"></div> */}
      <motion.div
        initial={{ y: -250 }} 
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="bg-gray-theme rounded-b-5xl relative z-[-1] pt-20"
        style={{ y, opacity }}>
        <div className="flex flex-col md:flex-row h-[calc(100vh_-_15rem)] justify-center items-center p-4 mb-1">
            <h1 className="text-4xl md:text-6xl font-bold text-center py-8 px-9 bg-gradient-to-r from-[#2ca2b4] via-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Hello World</h1>
            <div className="max-w-xl">
                <img src="images/paint-explosion.png" className="rounded-3xl"></img>
            </div>
        </div>
      </motion.div>

      <div className="flex items-center h-screen bg-black rounded-5xl border-2 border-[#2ca2b4] truncate">
        <motion.h1 className="text-4xl md:text-6xl font-bold text-[#2ca2b4]" style={{ x }}>Explore With Me</motion.h1>
      </div>
    </div>
  )
}

export default Intro