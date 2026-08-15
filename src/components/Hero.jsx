import portfolio from "../data/portfolio";
import profile from "../assets/profile.jpg";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section
    id="home"
    className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <div className="absolute left-20 top-32 h-3 w-3 animate-ping rounded-full bg-cyan-400"></div>

      <div className="absolute right-32 top-60 h-2 w-2 animate-pulse rounded-full bg-purple-400"></div>

      <div className="absolute bottom-32 left-1/3 h-2 w-2 animate-ping rounded-full bg-cyan-300"></div>

      <div className="absolute right-1/4 bottom-24 h-3 w-3 animate-pulse rounded-full bg-blue-400">
    </div>

  <motion.div
    className="absolute top-24 left-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.7, 0.3],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
  />

  <motion.div
    className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]"
    animate={{
      scale: [1.2, 1, 1.2],
      opacity: [0.4, 0.7, 0.4],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
    }}
  />

</div>

      {/* Container */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col-reverse items-center justify-center gap-16 px-6 pt-28 lg:flex-row lg:justify-between">

        {/* LEFT */}

        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <div className="space-y-8">

  <div className="space-y-4">

    <p className="text-cyan-400 text-lg font-semibold uppercase tracking-widest">
      Hi!👋, I'm
    </p>

    <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
      {portfolio.name}
    </h1>

    <div className="space-y-2">

<div className="space-y-3">

  <p className="text-lg uppercase tracking-widest text-slate-400">
    I'm a
  </p>

  <TypeAnimation
    sequence={[
      "Data Analyst",
      2000,
      "Python Developer",
      2000,
      "SQL Developer",
      2000,
      "Machine Learning Enthusiast",
      2000,
    ]}
    wrapper="h2"
    speed={70}
    repeat={Infinity}
    className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
  />

</div>

</div>

    <p className="max-w-xl text-lg leading-8 text-slate-400">
      {portfolio.tagline}
    </p>

  </div>

  <div className="flex flex-wrap gap-5">

    {/* Explore Projects */}
  <a
    href="#projects"
    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-cyan-400/60"
  >
    <span className="relative z-10">
      🚀 Explore My Projects
    </span>

    <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full"></span>
  </a>


  {/* Let's Connect */}
  <a
    href="#contact"
    className="rounded-xl border border-cyan-400 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-cyan-400 hover:text-slate-950"
  >
    📬 Let's Connect
  </a>

  </div>

  <div className="mt-8 flex items-center gap-6">

  <a
    href={portfolio.github}
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-full border border-cyan-400/40 bg-white/5 p-4 text-cyan-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
  >
    <FaGithub size={24} />
  </a>

  <a
    href={portfolio.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="group rounded-full border border-cyan-400/40 bg-white/5 p-4 text-cyan-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
  >
    <FaLinkedin size={24} />
  </a>

  <a
    href={`mailto:${portfolio.email}`}
    className="group rounded-full border border-cyan-400/40 bg-white/5 p-4 text-cyan-400 transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-cyan-400 hover:text-black"
  >
    <FaEnvelope size={24} />
  </a>

</div>

</div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="relative hidden w-1/2 items-center justify-center lg:flex"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
         }}
        >
          <div className="relative flex items-center justify-center">

  <div className="absolute h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[100px]" />

  {/* Floating Hero Graphic */}
  <motion.img
    src={hero}
    alt="Hero Graphic"
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
    }}

    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -top-20 -left-16 w-96 opacity-30 animate-pulse"
  />

  {/* Profile Photo */}
  <motion.img
  src={profile}
  alt={portfolio.name}
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative z-10 w-[280px] md:w-[360px] lg:w-[420px] rounded-3xl border-4 border-cyan-400 shadow-[0_20px_70px_rgba(6,182,212,0.35)] transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_90px_rgba(6,182,212,0.55)]"
/>

</div>

        </motion.div>

      </div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">

  <a
    href="#about"
    className="flex flex-col items-center text-slate-400 transition hover:text-cyan-400"
  >

    <span className="mb-2 text-sm tracking-widest">
      Scroll
    </span>

    <FaArrowDown size={18} />

  </a>

</div>

    </section>
  );
}

export default Hero;