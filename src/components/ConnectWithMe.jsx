import LinkedinIcon from "../assets/LinkedinIcon"
import GithubIcon from "../assets/GithubIcon"
import TwitterIcon from "../assets/TwitterIcon"

function ConnectWithMe() {
  return (
    <div id="Contact" className="p-1 w-full hover:brightness-110">
        <div className="flex flex-col items-center sm:items-start justify-between h-128 w-full p-14 sm:p-16 bg-slate-900 text-[#3DC7E7] rounded-5xl z-[-1]">
            <h2 className="text-4xl font-semibold pt-8">Want to talk?</h2>
            <div>
              <div className="flex flex-col items-center sm:items-start gap-5 pt-20 pb-10">
                <a href="mailto:ft.kimlong@gmail.com" className="flex items-center justify-center h-14 w-64 sm:w-96 border-2 border-[#3DC7E7] rounded-5xl">
                  <span>ft.kimlong@gmail.com</span>
                </a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="flex items-center justify-center h-14 w-64 sm:w-96 border-2 border-[#3DC7E7] rounded-5xl">
                  <span>Pigeon Mail</span>
                </a>
              </div>
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/kimlong-nguyen/" target="_blank" className="flex items-center justify-center h-14 w-20 border-2 border-[#3DC7E7] rounded-5xl">
                  <LinkedinIcon width='20' height='20' fill='#3DC7E7'/>
                </a>
                <a href="https://github.com/kimlong0" target="_blank" className="flex items-center justify-center h-14 w-20 border-2 border-[#3DC7E7] rounded-5xl">
                  <GithubIcon width='20' height='20' fill='#3DC7E7'/>
                </a>
                <a href="https://twitter.com/0xkimlong" target="_blank" className="flex items-center justify-center h-14 w-20 border-2 border-[#3DC7E7] rounded-5xl">
                  <TwitterIcon width='20' height='20' fill='#3DC7E7'/>
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ConnectWithMe