import { useState } from "react";
import logo from "../../public/final_logo.png"

const Navbar = () => {

    const links = ["Home", "Features", "Testimonials"];
    const [isActive, setIsActive] = useState("Home");

    const handleSmoothScroll = (e, link) => {
        e.preventDefault();

        const targetId = link;
        const targetElement = document.getElementById(targetId);


        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        };

    };
    

  return (
    <nav className="ml-25 fixed mt-10 z-10">
        <div className="flex items-center  gap-40">
              <img src={logo} alt="logo" className="h-10 w-auto select-none object-contain cursor-pointer" />
              <div className="bg-[#FAFAFA] h-13 w-130 border border-gray-400 rounded-full px-5 py-2">
                  <ul className="flex items-center justify-between">
                      {links.map((link) => {
                          
                          const safeHash = link.toLowerCase().replace(/\s+/g, "-");

                          return (
                              <li onClick={() => setIsActive(link)} className={`cursor-pointer px-3 rounded-full transition-all duration-300 ${
                                isActive === link
                                ? "px-4 py-1.5 rounded-full text-sm transition-colors bg-white border border-zinc-200 font-medium text-zinc-800 hover:text-zinc-600 "
                                : "text-gray-500 hover:text-black font-medium"
                                  } duration-500 transition-colors`}>
                                  <a href={`#${safeHash}`} onClick={(e) => handleSmoothScroll(e, link)} >{link}</a></li>
                          )
                      }) }
                  </ul>
              </div>
              <button type="btn" className="bg-[#006C49] w-30 px-3 py-4 h-11 rounded-xl  flex items-center gap-9 cursor-pointer duration-500 transition-all hover:translate-x-3 hover:bg-green-600 justify-center text-md font-bold text-white">
                  Get Started
              </button>
        </div>
    </nav>
  )
}

export default Navbar