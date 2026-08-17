import { motion } from "framer-motion";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-white py-12 text-slate-900 dark:bg-slate-950 dark:text-white md:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            My Credentials
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Certifications and learning achievements that support my
            skills in data analytics, Python, SQL, and machine learning.
          </p>

        </div>


        {/* ================= CERTIFICATE GRID ================= */}

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate, index) => (

            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-100 dark:bg-slate-900/70 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_25px_70px_rgba(6,182,212,0.20)]"
            >

              {/* ================= CERTIFICATE IMAGE ================= */}

              <div className="overflow-hidden bg-white">

                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>


              {/* ================= DETAILS ================= */}

              <div className="p-6">

                <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                  {certificate.category}
                </span>


                <h3 className="mt-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {certificate.title}
                </h3>


                <p className="mt-3 font-medium text-cyan-400">
                  {certificate.issuer}
                </p>


                <div className="mt-4 space-y-1 text-sm text-slate-400">

                  <p>
                    📅 {certificate.date}
                  </p>

                  <p>
                    ⏱️ {certificate.duration}
                  </p>

                </div>


                {/* ================= SKILLS ================= */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {certificate.skills.map((skill, skillIndex) => (

                    <span
                      key={skillIndex}
                      className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                    >
                      {skill}
                    </span>

                  ))}

                </div>


                {/* ================= VIEW BUTTON ================= */}

                <button
                  onClick={() =>
                    window.open(certificate.image, "_blank")
                  }
                  className="mt-6 w-full rounded-xl border border-cyan-400 px-4 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
                >
                  🎓 View Certificate
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certificates;