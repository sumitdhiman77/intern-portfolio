"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0f172a] text-gray-200 pt-20">
        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center px-6 py-32"
        >
          <h1 className="text-5xl font-bold mb-6 text-white">
            Hi, Iam Sumit Dhiman
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            MERN Stack Developer passionate about building scalable web
            applications and continuously improving development skills.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 py-24"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-white">
            Professional Summary
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Full Stack Developer skilled in building scalable web applications
            using the MERN stack and Next.js. Experienced in authentication
            systems, REST APIs, cloud-based media storage, and payment
            integrations. Passionate about writing clean, efficient code and
            continuously improving development skills. Currently seeking an
            internship opportunity to apply and grow as a software developer.
          </p>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 py-24"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Selected Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "YourVideoWorld — Cloud Video Streaming Platform",
                desc: "Secure full-stack video platform supporting authenticated uploads and adaptive HLS streaming.",
                tech: "Next.js · TypeScript · MongoDB · Cloudinary · NextAuth.js · HLS.js",
                live: "https://yourvideoworld.vercel.app/",
                github: "https://github.com/sumitdhiman77/yourvideoworld",
              },
              {
                title: "GetMeAChai — Fundraising Platform",
                desc: "Crowdfunding platform with authentication providers and Razorpay payment integration.",
                tech: "Next.js · MongoDB · Razorpay · NextAuth.js",
                live: "https://getmeachai-iota.vercel.app",
                github: "https://github.com/sumitdhiman77/GiftMeAChai",
              },
              {
                title: "React with Food — Food Ordering Application",
                desc: "Restaurant browsing and cart system built with Redux Toolkit and API integration.",
                tech: "React · Redux Toolkit · Fetch API",
                live: "https://react-with-food.vercel.app",
                github: "https://github.com/sumitdhiman77/React_with_Food",
              },
              {
                title: "Calendar Web Application",
                desc: "Dynamic calendar supporting year calculations (1800+) with leap-year handling.",
                tech: "HTML · CSS · JavaScript · Bootstrap",
                live: "https://calenderyear.netlify.app",
                github: "https://github.com/sumitdhiman77/Calender-Application",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-[#1e293b] border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.desc}</p>

                <p className="text-sm text-gray-500 mb-6">{project.tech}</p>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-600 rounded-md hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#111827] py-24"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Contact</h2>

            <p className="text-gray-400 mb-8">
              I am currently open to internship opportunities and collaboration.
              Feel free to connect with me.
            </p>

            <div className="space-y-4 text-lg">
              <p>
                📧{" "}
                <a
                  href="mailto:ersumitdhiman@gmail.com"
                  className="text-gray-200 hover:text-white"
                >
                  ersumitdhiman@gmail.com
                </a>
              </p>

              <p>
                🔗{" "}
                <a
                  href="https://linkedin.com/in/ersumit-dhiman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white"
                >
                  LinkedIn
                </a>
              </p>

              <p>
                💻{" "}
                <a
                  href="https://github.com/sumitdhiman77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-white"
                >
                  GitHub
                </a>
              </p>
            </div>

            <div className="mt-10">
              <a
                href="/Sumit_Dhiman_cv.pdf"
                download
                className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm bg-[#0f172a]">
          © {new Date().getFullYear()} Sumit Dhiman. Built with Next.js.
        </footer>
      </main>
    </>
  );
}
