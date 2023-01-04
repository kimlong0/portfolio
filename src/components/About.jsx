function About() {
    return (
        <div className="flex flex-col sm:flex-row gap-2 mt-2">
            <div className="flex flex-col sm:flex-row justify-around items-center basis-1/2 h-128 py-8 px-9 bg-[#2900e8] rounded-4xl text-white" id="About">
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold ">Finance & Information Systems student at the University of Washington.</h3>
                    <p className="text-2xl font-bold">Learning is my passion</p>
                </div>
                <img src="images/Profile-Pic.jpg" className="shrink-0 h-48 w-48 my-8 rounded-full object-cover"></img>
            </div>
            <div className="flex flex-col basis-1/2">
                <div className="flex justify-center items-center w-full h-64 bg-slate-700 rounded-4xl"></div>
                <div className="flex justify-center items-center w-full h-64 bg-[#FDD819] rounded-4xl mt-2">
                    <h2 className="text-2xl pb-8 font-bold">Some of my Projects</h2>
                </div>
            </div>
        </div>
    )
}

export default About