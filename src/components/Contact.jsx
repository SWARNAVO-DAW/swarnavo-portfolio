import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-28 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= SECTION HEADING ================= */}

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Let's Connect
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">
            I'm currently open to opportunities in Data Analytics,
            Python Development, SQL, and Machine Learning. Feel free
            to reach out for job opportunities, collaborations, or
            professional discussions.
          </p>

        </div>


        {/* ================= CONTACT CARDS ================= */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


          {/* ================= EMAIL ================= */}

          <motion.a
            href="mailto:swarnavodaw8@gmail.com"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-100 p-8 dark:border-slate-800 dark:bg-slate-900/70 p-8 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(6,182,212,0.20)]"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-3xl transition-transform duration-300 group-hover:scale-110">
              📧
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Email
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              swarnavodaw8@gmail.com
            </p>

            <p className="mt-4 font-semibold text-cyan-400">
              Send me an email →
            </p>

          </motion.a>


          {/* ================= LINKEDIN ================= */}

          <motion.a
            href="https://www.linkedin.com/in/swarnavodaw/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-slate-100 p-8 dark:border-slate-800 dark:bg-slate-900/70 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(6,182,212,0.20)]"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-3xl transition-transform duration-300 group-hover:scale-110">
              💼
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              LinkedIn
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Connect with me professionally
            </p>

            <p className="mt-4 font-semibold text-cyan-400">
              View my profile →
            </p>

          </motion.a>


          {/* ================= GITHUB ================= */}

          <motion.a
            href="https://github.com/SWARNAVO-DAW"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl border border-slate-200 bg-slate-100 p-8 dark:border-slate-800 dark:bg-slate-900/70 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(6,182,212,0.20)]"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-3xl transition-transform duration-300 group-hover:scale-110">
              💻
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              GitHub
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Explore my projects and code
            </p>

            <p className="mt-4 font-semibold text-cyan-400">
              Visit GitHub →
            </p>

          </motion.a>


          {/* ================= LOCATION ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl border border-slate-200 bg-slate-100 p-8 dark:border-slate-800 dark:bg-slate-900/70 text-center backdrop-blur-xl transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_20px_60px_rgba(6,182,212,0.20)]"
          >

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-3xl transition-transform duration-300 group-hover:scale-110">
              📍
            </div>

            <h3 className="mt-6 text-xl font-bold text-white">
              Location
            </h3>

            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Kolkata, India
            </p>

            <p className="mt-4 font-semibold text-cyan-400">
              Based in Kolkata
            </p>

          </motion.div>

        </div>


        {/* ================= AVAILABILITY ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center"
        >

          <div className="flex items-center justify-center gap-3">

            <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

            <p className="font-semibold text-cyan-300">
              Open to opportunities
            </p>

          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            Interested in Data Analyst, Python Developer, SQL Developer,
            and Machine Learning opportunities.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;