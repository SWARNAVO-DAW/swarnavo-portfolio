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

// import {
//   FaDownload,
//   FaMoon,
//   FaSun,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
import { FaDownload, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {

  const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem("theme") === "dark";
});

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      darkMode
    );

    localStorage.setItem(
      "theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto max-w-[1400px] px-8 py-3">
        <div className="flex items-center justify-between">

          {/* ================= Logo ================= */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-xl font-bold text-white shadow-[0_8px_30px_rgba(6,182,212,0.45)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-3 hover:scale-110">
              SD
            </div>

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Swarnavo Daw
              </h1>

              <p className="text-sm text-slate-600 dark:text-slate-300">
                Data Analyst • Python Developer • ML Enthusiast
              </p>
            </div>
          </div>

          {/* ================= Menu ================= */}
          <div className="flex items-center gap-16">
            <ul className="hidden gap-8 text-[15px] font-medium text-slate-800 md:flex dark:text-white">
              <li>
                <a href="#home" className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#experience" className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400">
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#certificates" className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400">
                  Certificates
                </a>
              </li>

              <li>
                <a href="#contact" className="inline-block cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-800 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white md:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* 🌙 Dark/Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="hidden h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white/80 text-slate-900 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-cyan-500 hover:text-white md:flex dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="group relative hidden items-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:from-cyan-500 hover:to-purple-700 hover:shadow-cyan-400/60 md:flex"
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

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden dark:border-white/10 dark:bg-slate-950/95">
          <div className="flex flex-col gap-5">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-slate-900 transition-colors hover:text-cyan-400 dark:text-white">
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-slate-900 transition-colors hover:text-cyan-400 dark:text-white">
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="text-slate-900 transition-colors hover:text-cyan-400 dark:text-white">
              Skills
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)} className="text-slate-900 transition-colors hover:text-cyan-400 dark:text-white">
              Experience
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="text-slate-900 transition-colors hover:text-cyan-400 dark:text-white">
              Projects
            </a>
            <a href="#certificates" onClick={() => setMenuOpen(false)} className="text-slate-900 transition-colors hover:text-cyan-400 dark:text-white">
              Certificates
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-slate-900 transition-colors hover:text-cyan-400 dark:text-white">
              Contact
            </a>
            <a
              href="/resume.pdf"
              download
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-5 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;