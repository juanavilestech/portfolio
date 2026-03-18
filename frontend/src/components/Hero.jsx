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

      <div className="container mx-auto flex flex-col items-center text-center justify-center min-h-[60vh] z-10">
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
          Juan Aviles <br className="md:hidden" /> <span className="gradient-text">Tech</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
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
          className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-12"
        >
          <a
            href="#projects"
            className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center space-x-3 transition-all hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 w-full sm:w-auto"
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
              { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/juan-aviles-tech/" },
              {
                icon: <Mail size={22} />,
                href: "mailto:juanavilestech@gmail.com",
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
    </section>
  );
};

export default Hero;
