import aboutStats from "../data/aboutStats";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import portfolio from "../data/portfolio";
import CountUp from "react-countup";
import { FaFolderOpen } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= ABOUT ================= */}
        <div className="grid gap-20 items-center lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={profile}
              alt="Swarnavo Daw"
              className="w-[340px] rounded-3xl border-4 border-cyan-400 shadow-[0_20px_70px_rgba(6,182,212,0.35)]"
            />
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <p className="text-cyan-400 font-semibold uppercase tracking-widest">
              About Me
            </p>

            <h2 className="text-5xl font-bold">
              Who am I?
            </h2>

            <p className="text-slate-400 leading-8 text-lg">
              {portfolio.about}
            </p>

            {/* Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="text-cyan-400 font-semibold">
                  📍 Location
                </h3>
                <p className="mt-2 text-slate-400">
                  Kolkata, India
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="text-cyan-400 font-semibold">
                  🎓 Education
                </h3>
                <p className="mt-2 text-slate-400">
                  BCA Graduate
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="text-cyan-400 font-semibold">
                  💼 Current Role
                </h3>
                <p className="mt-2 text-slate-400">
                  Customer Support Associate
                </p>
              </div>

              <div className="rounded-xl bg-slate-900 p-5">
                <h3 className="text-cyan-400 font-semibold">
                  🎯 Career Goal
                </h3>
                <p className="mt-2 text-slate-400">
                  Data Analyst | Python Developer | SQL Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STATISTICS ================= */}
        <div className="mt-28 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-[6px]">
            My Journey
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Achievements & Highlights
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A quick overview of my projects, certifications,
            professional experience, and technical expertise.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((stat, index) => {
            const Icon = stat.icon || FaFolderOpen;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-cyan-400 hover:shadow-[0_25px_60px_rgba(6,182,212,0.30)]"
              >
                <div className="mb-5 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <Icon />
                  </div>
                </div>

                <h3 className="text-5xl font-bold text-cyan-400">
                  <CountUp
                    end={stat.number}
                  />
                  {stat.suffix}
                </h3>

                <p className="mt-4 text-lg font-semibold text-white">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default About;