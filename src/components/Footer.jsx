import { motion } from "framer-motion"

function Footer() {
  return (
    <div className="pt-1 px-1 w-full hover:brightness-110">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between h-64 pt-14 pb-6 sm:pt-16 sm:px-16 md:px-32 bg-gray-theme text-[#2ca2b4] rounded-t-5xl z-[-1]">
            <div className="flex flex-col justify-center h-full">
                <motion.a 
                    whileHover={{
                    scale: 1.05,
                    backgroundColor: "#2ca2b4",
                    color: "#F4F2EE"
                    }}
                    transition={{ scale: {type: "spring", stiffness: 400 }}}
                    href="https://drive.google.com/uc?export=download&id=1oQi7V_Dsc9wXjgpXIvDvfAPfUTv6Z4lI" target="_blank" className="flex items-center justify-center h-14 w-48 border-2 border-[#2ca2b4] rounded-5xl">
                    <span>RESUME</span>
                </motion.a>
                <div className="flex justify-center">
                    <p className="text-center pt-4 pr-2">Made with:</p>
                    <div className="flex justify-center gap-2 pt-3">
                        <a href="https://reactjs.org/" target="_blank" className="flex">
                            <img width="24" src="/images/icons/react.svg" alt="react" className=""/>
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank" className="flex">
                            <img width="24" src="/images/icons/tailwindcss.svg" alt="tailwindcss" className=""/>
                        </a>
                        <a href="https://firebase.google.com/" target="_blank" className="flex">
                            <img width="24" src="/images/icons/firebase.svg" alt="firebase" className=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex items-center h-full">
                <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-[#2ca2b4] via-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent pt-4 sm:pt-0">Thanks for visiting!</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer