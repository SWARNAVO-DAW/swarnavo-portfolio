import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-cyan-400 font-semibold uppercase tracking-[6px]">
            Technical Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            My Tech Stack
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            Technologies, tools, and programming languages I use to build
            data-driven solutions and real-world applications.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_25px_60px_rgba(6,182,212,0.25)]"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10 text-3xl text-cyan-400 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">

                    <Icon />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">
                      {skill.name}
                    </h3>

                    <p className="text-sm text-slate-400">
                      {skill.level}%
                    </p>

                  </div>

                </div>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  />

                </div>

                <p className="mt-6 leading-7 text-slate-400">
                  {skill.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;