import { Search , CircleDollarSign } from "lucide-react";

const HeroSection = () => {
  return (
      <section className="flex items-center justify-center flex-col gap-7 bg-linear-to-b from-white to-[#EAF1FF] h-[130vh]">
          <div className="bg-[#6FFBBE] w-80 tracking-wide rounded-full px-2 py-1 text-green-900 font-semibold uppercase text-center">Transform your carrer journey</div>
          <div className="flex flex-col gap-4">
                <h1 className="text-black font-bold capitalize text-5xl">Where ambition meets</h1>
                <h2 className="text-transparent bg-linear-to-r from-[#00885D] to-[#009ADA] bg-clip-text font-bold capitalize text-5xl">Seamless opportunity.</h2>
          </div>
          <span className="text-center text-[#68788F]">The next-generation job portal for perfect applicants and high-growth companies.<br /> Clean, clear, and focused on your professional growth.
          </span>
          
          <div className="bg-white shadow-2xl w-150 h-20 rounded-xl mt-10 px-6 py-2 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Search size={17} className="text-gray-700"/>
                <input type="text" className="bg-white outline-none border-none" placeholder="Job Keyword , Title"/>
              </div>
              <div className="flex items-center gap-2">
                <CircleDollarSign  size={17} className="text-gray-700"/>
                <input type="text" className="bg-white outline-none border-none" placeholder="Minimum salary"/>
              </div>
              <button className="bg-[#00885D] px-4 h-3/4 w-full rounded-xl whitespace-nowrap font-bold text-white cursor-pointer transition-all duration-500 hover:bg-[#006C49]">Search Jobs</button>
         </div>

    </section>
  )
}

export default HeroSection