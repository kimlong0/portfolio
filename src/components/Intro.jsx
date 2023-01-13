function Intro() {
  return (
    <div className="bg-gray-theme rounded-b-5xl">
        <div className="h-20"></div>
        <div className="flex flex-col md:flex-row justify-center items-center p-4 mb-1">
            <h1 className="text-4xl md:text-6xl font-bold text-center py-8 px-9 bg-gradient-to-r from-[#2ca2b4] via-[#7f87ff] to-[#ec3d43] bg-clip-text text-transparent">Hello World</h1>
            <div className="max-w-xl">
                <img src="images/paint-explosion.png" className="rounded-3xl"></img>
            </div>
        </div>
    </div>
  )
}

export default Intro