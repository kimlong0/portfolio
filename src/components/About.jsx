import { EnvelopeIcon } from "@heroicons/react/24/solid"

function About() {
    return (
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <div className="flex flex-col justify-around items-center basis-1/2 h-128 py-8 px-9 bg-[#3DC7E7] rounded-5xl text-black" id="About">
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold ">Finance & Information Systems student at the University of Washington.</h3>
                    <p className="text-2xl font-bold">Learning is my passion</p>
                </div>
                <img src="images/Profile-Pic.jpg" className="shrink-0 h-48 w-48 my-8 rounded-full object-cover"></img>
            </div>
            <div className="flex flex-col h-128 basis-1/2 gap-2">
                <div className="flex flex-col justify-center items-center h-64 w-full bg-slate-700 rounded-5xl text-white">
                    <h2 className="text-2xl pb-8 font-bold">Connect with me</h2>
                    <div className="flex gap-5">
                        <a href="mailto:ft.kimlong@gmail.com">
                            <EnvelopeIcon width="25"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kimlong-nguyen/" target="_blank">
                            <img src="/images/icons/linkedin.png" width="25" alt="linkedin"></img>
                        </a>
                        <a href="https://github.com/kimlong0" target="_blank">
                            <img width="25" src="/images/icons/github.svg" alt="github"></img>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center h-64 w-full bg-[#FDD819] rounded-5xl">
                    <h2 className="text-2xl font-bold">Some of my Projects</h2>
                </div>
            </div>
        </div>
    )
}

export default About