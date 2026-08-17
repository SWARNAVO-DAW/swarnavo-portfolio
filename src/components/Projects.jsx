// import { motion } from "framer-motion";
// import projects from "../data/projects";
// function Projects() {
//   return (
//     <section
//       id="projects"
//       className="bg-slate-950 py-28 text-white"
//     >
//       {/* Your Projects content */}
//     </section>
//   );
// }

// export default Projects;

import { motion } from "framer-motion";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-12 md:py-16 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= SECTION HEADING ================= */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            My Work
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            A selection of projects demonstrating my experience in
            data analytics, visualization, programming, and machine learning.
          </p>

        </div>


        {/* ================= PROJECT GRID ================= */}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          {projects.map((project, index) => (

            <motion.article
              key={project.id || project.title}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true,
                amount: 0.2
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}

              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_25px_70px_rgba(6,182,212,0.20)]"
            >

              {/* ================= PROJECT IMAGE ================= */}

              {project.image && (
                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                </div>
              )}


              {/* ================= PROJECT DETAILS ================= */}

              <div className="p-8">

                {/* CATEGORY */}

                {project.category && (
                  <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                    {project.category}
                  </span>
                )}


                {/* TITLE */}

                <h3 className="mt-6 text-2xl font-bold transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>


                {/* ================= TECHNOLOGIES ================= */}

                {project.technologies && (
                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.map(
                      (technology, techIndex) => (

                        <span
                          key={techIndex}
                          className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 group-hover:border-cyan-400/30"
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>
                )}


                {/* ================= BUTTONS ================= */}

                <div className="mt-8 flex flex-wrap gap-4">

                  {/* GitHub */}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-cyan-400 px-5 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
                    >
                      💻 GitHub
                    </a>
                  )}


                  {/* Live Demo */}

                  {project.demo &&
                    project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                      >
                        🚀 Live Demo
                      </a>
                    )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;