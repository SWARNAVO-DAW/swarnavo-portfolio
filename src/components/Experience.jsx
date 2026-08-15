import { motion } from "framer-motion";
import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="bg-white dark:bg-slate-950 py-28 text-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            My Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Professional Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            My professional journey, responsibilities, and experience
            developed through real-world work.
          </p>

        </div>


        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-4xl">

          {/* Vertical Line */}

          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 md:block" />


          {experience.map((job, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="relative mb-12 md:pl-16"
            >

              {/* Timeline Dot */}

              <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/40 md:flex" />


              {/* Experience Card */}

              <div className="group rounded-2xl border border-slate-800 bg-slate-100 dark:bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_25px_60px_rgba(6,182,212,0.20)]">

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">

                  <div>

                    <p className="text-sm font-medium text-cyan-400">
                      {job.period}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {job.role}
                    </h3>

                    <p className="mt-1 text-lg text-slate-300">
                      {job.company}
                    </p>

                  </div>

                  <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                    {job.type}
                  </span>

                </div>


                {/* Description */}

                <p className="mt-6 leading-7 text-slate-400">
                  {job.description}
                </p>


                {/* Skills */}

                <div className="mt-6 flex flex-wrap gap-3">

                  {job.skills.map((skill, skillIndex) => (

                    <span
                      key={skillIndex}
                      className="rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-slate-300 transition-all duration-300 group-hover:border-cyan-400/40"
                    >
                      {skill}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;