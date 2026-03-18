import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Blobs and Particles */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <ParticlesBackground />
        <div className="blob-animation absolute -top-[10%] -right-[5%] w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
        <div
          className="blob-animation absolute top-[40%] -left-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"
          style={{ animationDelay: "-5s" }}
        />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6 border border-primary-200 dark:border-primary-800"
          >
            Disponible para nuevas oportunidades
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-[1.1]"
          >
            Juan <br /> <span className="gradient-text">Aviles</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed"
          >
            Creando aplicaciones web de alto rendimiento y{" "}
            <span className="text-primary-500 font-bold italic">
              soluciones impulsadas por IA
            </span>{" "}
            con enfoque en una experiencia de usuario excepcional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-5 mb-12"
          >
            <a
              href="#projects"
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center space-x-3 transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:-translate-y-1"
            >
              <span>Explorar Mi Trabajo</span>
              <ArrowRight size={20} />
            </a>
            <div className="flex items-center space-x-4">
              {[
                {
                  icon: <Github size={22} />,
                  href: "https://github.com/juanavilestech",
                },
                { icon: <Linkedin size={22} />, href: "#" },
                {
                  icon: <Mail size={22} />,
                  href: "mailto:juan.aviles@example.com",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-2xl hover:text-primary-500 hover:border-primary-500/50 transition-all hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 relative flex justify-center mt-16 md:mt-0">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://avatars.githubusercontent.com/u/104192667?v=4"
                alt="Juan Aviles"
                className="w-72 h-72 md:w-96 md:h-96 rounded-[2rem] object-cover glass p-3 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
