import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-cyan-400 font-semibold uppercase tracking-[6px]">
            My Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Technologies & Tools
          </h2>

          <p className="mt-5 text-slate-400 max-w-3xl mx-auto leading-8">
            My technical toolkit includes programming languages, data analytics,
            visualization tools, and machine learning libraries that I use to
            build real-world projects and solve business problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">
                    {skill.icon}
                  </span>

                  <h3 className="text-xl font-semibold">
                    {skill.name}
                  </h3>
                </div>

                <span className="font-semibold text-cyan-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.08,
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;