import { Nunito } from "next/font/google";
const fontNunito = Nunito({ subsets: ["latin"] });

function NavBar() {
   return (
      <nav className="w-full h-16 fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-1 md:px-32">
         <div className="size-full flex items-center justify-between m-auto px-3">
            <a href="#about-me" className={`${fontNunito.className} flex items-center text-md md:text-xl font-extrabold ml-2 text-gray-300`}>
               Ali Shariatian
            </a>
            <div className="flex items-center justify-between h-full">
               <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-4 px-5 py-[10px] rounded-full text-gray-300">
                  <a href="#about-me" className="cursor-pointer">
                     About Me
                  </a>
                  <a href="#skills" className="cursor-pointer px-3 mx-3 border-x-[1px] border-[#7042f861]">
                     Skills
                  </a>
                  <a href="#projects" className="cursor-pointer">
                     Projects
                  </a>
               </div>
            </div>
         </div>
      </nav>
   );
}

export default NavBar;
