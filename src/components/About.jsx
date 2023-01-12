import { EnvelopeIcon, CommandLineIcon } from "@heroicons/react/24/solid"
import GithubIcon from "../assets/GithubIcon"

function About() {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col justify-around items-center basis-1/2 h-128 py-20 px-20 m-1 bg-slate-800 rounded-5xl text-white" id="About">
                <div className="flex flex-col">
                    <h3 className="text-xl md:text-2xl">Finance & Information Systems student at the University of Washington.</h3>
                    <p className="text-3xl font-bold mt-6">Learning is my passion!</p>
                </div>
                <img src="images/Profile-Pic.jpg" className="shrink-0 h-48 w-48 mt-8 rounded-full object-cover"></img>
            </div>
            <div className="flex flex-col h-128 basis-1/2 m-1">
                <div className="flex flex-col justify-center items-center h-64 w-full bg-[#3DC7E7] mb-1 rounded-5xl text-black">
                    <h2 className="text-3xl pb-8 font-semibold">Connect with me</h2>
                    <div className="flex gap-5">
                        <a href="mailto:ft.kimlong@gmail.com">
                            <EnvelopeIcon width="25"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kimlong-nguyen/" target="_blank">
                            <img src="/images/icons/linkedin.svg" width="25" fill="white" alt="linkedin"></img>
                        </a>
                        <a href="https://github.com/kimlong0" target="_blank">
                            <GithubIcon />
                        </a>
                    </div>
                </div>
                <a href="#Projects">
                    <div className="flex flex-col md:flex-row justify-center items-center h-64 w-full bg-[#FDD819] mt-1 rounded-5xl text-center hover:scale-95 hover:brightness-110 ease-in duration-200">
                        <h2 className="text-3xl font-semibold m-4">Some of my Projects</h2>
                        <CommandLineIcon width='40'/>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default About