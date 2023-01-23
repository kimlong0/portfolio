import LinkedinIcon from "../assets/LinkedinIcon"

function ConnectWithMe() {
  return (
    <div className="p-1 w-full hover:scale-95 hover:brightness-110 ease-in duration-200">
        <div className="flex flex-col h-128 w-full p-10 sm:p-16 bg-slate-900 text-[#3DC7E7] rounded-5xl z-[-1]">
            <h2 className="text-4xl font-semibold">Want to talk?</h2>
            <div className="flex flex-col gap-5 pt-20 pb-10">
              <a href="mailto:ft.kimlong@gmail.com" className="flex items-center justify-center h-14 w-80 border-2 border-[#3DC7E7] rounded-5xl">
                <span>ft.kimlong@gmail.com</span>
              </a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="flex items-center justify-center h-14 w-80 border-2 border-[#3DC7E7] rounded-5xl">
                <span>Pigeon Mail</span>
              </a>
            </div>
            <div className="flex">
              <a href="https://www.linkedin.com/in/kimlong-nguyen/" target="_blank" className="flex items-center justify-center h-14 w-20 border-2 border-[#3DC7E7] rounded-5xl">
                <LinkedinIcon width='20' height='20' fill='#3DC7E7'/>
              </a>
            </div>
        </div>

    </div>
  )
}

export default ConnectWithMe