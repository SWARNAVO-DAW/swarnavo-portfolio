// import profile from "../assets/profile.jpg";
import portfolio from "../data/portfolio";
import { motion } from "framer-motion";
// import { } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= ABOUT ================= */}

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          {/* ================= PROFESSIONAL SNAPSHOT ================= */}

<motion.div
  initial={{
    opacity: 0,
    x: -40,
    boxShadow: "0 0 0 rgba(6,182,212,0)"
  }}
  whileInView={{
    opacity: 1,
    x: 0,
    boxShadow: [
      "0 0 0 rgba(6,182,212,0)",
      "0 0 45px rgba(6,182,212,0.25)",
      "0 0 20px rgba(6,182,212,0.12)"
    ]
  }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: "easeOut"
  }}
  whileHover={{
    y: -6,
    boxShadow: "0 0 45px rgba(6,182,212,0.25)"
  }}
  className="rounded-3xl border border-slate-800 bg-slate-100 p-8 transition-colors duration-300 dark:bg-slate-900"
>

  <p className="text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
    Professional Snapshot
  </p>

  <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
    Professional Snapshot
  </h3>

  <div className="mt-8 space-y-5">

    {/* Advanced Excel & Data Analytics */}
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-950">
      <span className="text-2xl">
        📊
      </span>

      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400">
        Advance Excel & Data Analytics
      </h4>
    </div>


    {/* Python Development */}
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-950">
      <span className="text-2xl">
        🐍
      </span>

      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400">
        Python Development
      </h4>
    </div>


    {/* SQL & Databases */}
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-950">
      <span className="text-2xl">
        🗄️
      </span>

      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400">
        SQL & Databases
      </h4>
    </div>


    {/* Power BI & Visualization */}
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-950">
      <span className="text-2xl">
        📈
      </span>

      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400">
        Power BI & Visualization
      </h4>
    </div>


    {/* Machine Learning */}
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-950">
      <span className="text-2xl">
        🤖
      </span>

      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400">
        Machine Learning
      </h4>
    </div>


    {/* Business Problem Solving */}
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-950">
      <span className="text-2xl">
        💡
      </span>

      <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-cyan-400">
        Business Problem Solving
      </h4>
    </div>

  </div>

</motion.div>

          {/* RIGHT */}

          <div className="space-y-6">

            <p className="font-semibold uppercase tracking-widest text-cyan-400">
              About Me
            </p>

            <h2 className="text-5xl font-bold">
              Who am I?
            </h2>

            <p className="text-lg leading-8 text-slate-400">
              {portfolio.about}
            </p>

            {/* Information Cards */}

            <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">

              <div className="rounded-xl bg-slate-100 p-5 dark:bg-slate-900">
                <h3 className="font-semibold text-cyan-400">
                  📍 Location
                </h3>

                <p className="mt-2 text-slate-400">
                  Kolkata, India
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-5 dark:bg-slate-900">
                <h3 className="font-semibold text-cyan-400">
                  🎓 Education
                </h3>

                <p className="mt-2 text-slate-400">
                  BCA Graduate
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-5 dark:bg-slate-900">
                <h3 className="font-semibold text-cyan-400">
                  💼 Current Role
                </h3>

                <p className="mt-2 text-slate-400">
                  Customer Support Associate
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-5 dark:bg-slate-900">
                <h3 className="font-semibold text-cyan-400">
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

        {/* ================= STATISTIC CARDS ================= */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
          >
            <div className="text-5xl text-cyan-400">5+</div>
            <p className="mt-4 text-lg font-semibold">Featured Projects</p>
          </motion.div> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
          >
          <div className="text-5xl text-cyan-400">
           5+
          </div>

          <p className="mt-4 text-lg font-semibold">
            Featured Projects
          </p>
        </motion.div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <div className="text-5xl text-cyan-400">10+</div>
            <p className="mt-4 text-lg font-semibold">Certifications</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <div className="text-3xl text-cyan-400">2026–Present</div>
            <p className="mt-4 text-lg font-semibold">Professional Experience</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <div className="text-5xl text-cyan-400">6+</div>
            <p className="mt-4 text-lg font-semibold">Technical Skills</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;