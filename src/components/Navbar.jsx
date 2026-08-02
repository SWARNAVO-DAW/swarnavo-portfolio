// function Navbar() {
//   return (
//     <nav className="bg-slate-900 text-white px-8 py-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-cyan-400">
//           Swarnavo Daw
//         </h1>

//         <ul className="flex gap-8">
//           <li>Home</li>
//           <li>About</li>
//           <li>Skills</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { useState } from "react";

// function Navbar() {

//   return (

//     <nav>

//       Navbar

//     </nav>

//   );

// }

// export default Navbar;

import { FaDownload } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-3">

        <div className="flex items-center justify-between">

          {/* ================= Logo ================= */}

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-cyan-500/40">
              SD
            </div>

            <div>

              <h1 className="text-2xl font-bold text-white">
                Swarnavo Daw
              </h1>

              <p className="text-sm text-gray-400">
                Data Analyst • Python Developer • ML Enthusiast
              </p>

            </div>

          </div>

          {/* ================= Menu ================= */}

          <div className="flex items-center gap-10">

            <ul className="hidden md:flex gap-8 text-[15px] font-medium text-white">

              <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
                Home
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
                About
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
                Skills
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
                Experience
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
                Projects
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
                Certificates
              </li>

              <li className="cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:-translate-y-1">
                Contact
              </li>

            </ul>

            {/* Resume Button */}

            <a
              href="/resume.pdf"
              download
              className="hidden md:flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:scale-105"
            >
              <FaDownload />

              Download Resume

            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;