import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white">

      <div className="mx-auto max-w-7xl px-6 py-12">

        {/* ================= MAIN FOOTER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-3"
        >

          {/* ================= BRAND ================= */}

          <div>

            <div className="flex items-center gap-4">

              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl
                bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600
                text-xl font-bold text-slate-900 dark:text-white
                shadow-[0_8px_30px_rgba(6,182,212,0.35)]
                transition-transform duration-300
                hover:scale-110"
              >
                SD
              </div>

              <div>

                <h2 className="text-xl font-bold">
                  Swarnavo Daw
                </h2>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Data Analyst • Python Developer
                </p>

              </div>

            </div>

            <p className="mt-5 max-w-sm leading-6 text-slate-600 dark:text-slate-400">
              Passionate about transforming data into meaningful insights
              and building practical solutions using Python, SQL,
              analytics, and machine learning.
            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-lg font-semibold text-cyan-400">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">

              <a
                href="#home"
                className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Skills
              </a>

              <a
                href="#experience"
                className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Projects
              </a>

              <a
                href="#certificates"
                className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Certificates
              </a>

              <a
                href="#contact"
                className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Contact
              </a>

            </div>

          </div>


          {/* ================= SOCIAL LINKS ================= */}

          <div>

            <h3 className="text-lg font-semibold text-cyan-400">
              Connect With Me
            </h3>

            <p className="mt-5 leading-6 text-slate-600 dark:text-slate-400">
              Let's connect and discuss opportunities, projects,
              collaborations, and ideas.
            </p>

            <div className="mt-6 flex gap-4">

              {/* GitHub */}

              <motion.a
                href="https://github.com/SWARNAVO-DAW"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex h-11 w-11 items-center justify-center rounded-full
                border border-slate-700 bg-white dark:bg-slate-950
                text-slate-300 transition-all duration-300
                hover:border-cyan-400 hover:text-cyan-400
                hover:shadow-[0_10px_30px_rgba(6,182,212,0.20)]"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </motion.a>


              {/* LinkedIn */}

              <motion.a
                href="https://www.linkedin.com/in/swarnavodaw/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="flex h-11 w-11 items-center justify-center rounded-full
                border border-slate-700 bg-slate-900 dark:bg-slate-950
                text-slate-300 transition-all duration-300
                hover:border-cyan-400 hover:text-cyan-400
                hover:shadow-[0_10px_30px_rgba(6,182,212,0.20)]"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={19} />
              </motion.a>

            </div>

          </div>

        </motion.div>


        {/* ================= DIVIDER ================= */}

        <div className="my-10 border-t border-slate-800"></div>


        {/* ================= BOTTOM FOOTER ================= */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">

          <p>
            © {currentYear} Swarnavo Daw. All rights reserved.
          </p>

          <p>
            Built with ❤️ using React & Tailwind CSS
          </p>

          {/* Back To Top */}

          <motion.a
            href="#home"
            whileHover={{ y: -5, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-full
            border border-slate-700 bg-slate-900 dark:bg-slate-950
            text-slate-400 dark:text-slate-400 transition-all duration-300
            hover:border-cyan-400 hover:text-cyan-400"
            aria-label="Back to top"
          >
            <FaArrowUp size={16} />
          </motion.a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;