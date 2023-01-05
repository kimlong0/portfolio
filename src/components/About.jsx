import { EnvelopeIcon } from "@heroicons/react/24/solid"

function About() {
    return (
        <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col justify-around items-center basis-1/2 h-128 py-20 px-20 m-1 bg-slate-800 rounded-5xl text-white" id="About">
                <div className="flex flex-col">
                    <h3 className="text-xl font-medium">Finance & Information Systems student at the University of Washington.</h3>
                    <p className="text-3xl font-bold mt-6">Learning is my passion</p>
                </div>
                <img src="images/Profile-Pic.jpg" className="shrink-0 h-48 w-48 mt-8 rounded-full object-cover"></img>
            </div>
            <div className="flex flex-col h-128 basis-1/2 m-1">
                <div className="flex flex-col justify-center items-center h-64 w-full bg-[#3DC7E7] mb-1 rounded-5xl text-black">
                    <h2 className="text-2xl pb-8 font-bold">Connect with me</h2>
                    <div className="flex gap-5">
                        <a href="mailto:ft.kimlong@gmail.com">
                            <EnvelopeIcon width="25"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kimlong-nguyen/" target="_blank">
                            <img src="/images/icons/linkedin.svg" width="25" fill="white" alt="linkedin"></img>
                        </a>
                        <a href="https://github.com/kimlong0" target="_blank">
                            <img width="25" src="/images/icons/github.svg" alt="github"></img>
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center h-64 w-full bg-[#FDD819] mt-1 rounded-5xl">
                    <h2 className="text-2xl font-bold">Some of my Projects</h2>
                </div>
            </div>
        </div>
    )
}

export default About