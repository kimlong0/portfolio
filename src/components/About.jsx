import { CommandLineIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid"

function About() {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col lg:flex-row justify-around items-center basis-1/2 h-128 py-20 px-20 m-1 bg-slate-900 rounded-5xl text-white" id="About">
                <div className="flex flex-col xl:gap-8 lg:pr-6">
                    <h3 className="text-xl md:text-2xl text-center lg:text-left max-w-lg">Finance & Information Systems student at the University of Washington.</h3>
                    <p className="text-3xl font-bold mt-6 text-center lg:text-left">Learning is my passion!</p>
                </div>
                <img src="images/Profile-Pic.jpg" className="shrink-0 h-48 w-48 sm:w-40 sm:h-40 md:h-48 md:w-48 mt-8 rounded-full object-cover"></img>
            </div>
            <div className="flex flex-col h-128 basis-1/2 m-1">
                <a href="#Contact">
                    <div className="flex flex-col md:flex-row justify-center items-center h-64 w-full bg-[#3DC7E7] mt-1 rounded-5xl text-center hover:scale-95 hover:brightness-110 ease-in duration-200">
                        <h2 className="text-3xl font-semibold m-4">Contact</h2>
                        <PaperAirplaneIcon width='40'/>
                    </div>
                </a>
                <a href="#Projects">
                    <div id="Projects" className="flex flex-col md:flex-row justify-center items-center h-64 w-full bg-[#FDD819] mt-1 rounded-5xl text-center hover:scale-95 hover:brightness-110 ease-in duration-200">
                        <h2 className="text-3xl font-semibold m-4">Projects</h2>
                        <CommandLineIcon width='40'/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default About