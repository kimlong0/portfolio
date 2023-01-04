function About() {
    return (
      <div className="flex flex-col sm:flex-row justify-around items-center h-80 py-8 px-9 mt-2 bg-[#2900e8] rounded-4xl text-white" id="About">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold ">
            I am a Finance and Information Systems student at the University of Washington.
          </h3>
          <p className="text-2xl font-bold">Learning is my passion</p>
        </div>
        <img src="images/Profile-Pic.jpg" className="shrink-0 h-48 w-48 my-8 rounded-full object-cover"></img>
      </div>
    )
}

export default About