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

import { FaDownload, FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-slate-950/40 backdrop-blur-2xl transition-all duration-500">
      <div className="max-w-[1400px] mx-auto px-8 py-3">

        <div className="flex items-center justify-between">

          {/* ================= Logo ================= */}

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br
            from-cyan-400 via-blue-500 to-purple-600
            text-xl font-bold text-white
            shadow-[0_8px_30px_rgba(6,182,212,0.45)]
            transition-transform duration-300
            hover:rotate-3 hover:scale-110 hover:-translate-y-1" >
              SD
            </div>

            <div>

              <h1 className="text-3xl font-extrabold tracking-tight text-white">
                Swarnavo Daw
              </h1>

              <p className="text-sm text-slate-300">
                Data Analyst • Python Developer • ML Enthusiast
              </p>

            </div>

          </div>

          {/* ================= Menu ================= */}

          <div className="flex items-center gap-16">

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

            {/* 🌙 Dark/Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden md:flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Resume Button */}

            <a
              href="/resume.pdf"
              download
              className="group relative hidden md:flex items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:from-cyan-500 hover:to-purple-700 hover:shadow-cyan-400/60"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-all duration-300 group-hover:translate-x-full"></span>

            <FaDownload className="relative z-10" />

            <span className="relative z-10">
              Download Resume
            </span>
          </a>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;