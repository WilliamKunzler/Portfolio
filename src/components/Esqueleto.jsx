import About from "./About"
import Experience from "./Skills"
import Hero from "./Hero"
import NavBar from "./NavBar"

function Esqueleto() {
  return (
    <div className="flex w-full min-h-screen gap-15 flex-col bg-[#161513]">
      <div className="flex flex-col w-full">
        <NavBar />
        <Hero />
      </div>
      <div className="flex flex-col gap-30 px-4 md:px-50">
        <Experience />
        <About />
      </div>
    </div>
  )
}

export default Esqueleto
