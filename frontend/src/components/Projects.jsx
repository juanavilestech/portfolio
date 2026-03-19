import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Github, Star, X, Info } from "lucide-react";
import expoagroImg from "../../img/expoagro.png";
import rentandgoImg from "../../img/rentandgo.png";
import controlItImg from "../../img/control-it.png";

const Projects = () => {
  const [activeMessage, setActiveMessage] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Control IT",
      description:
        "Sistema de gestión de servicios IT con dashboard en tiempo real, control de inventario y autenticación de usuarios.",
      image: controlItImg,
      github: "https://github.com/juanavilestech/controlit",
      demoMessage:
        "Por datos sensibles, el sistema es utilizado de manera local. Para conocer características técnicas, ir al link de Github.",
      tech: ["React", "Node.js", "Express", "Prisma ORM", "SQLite"],
      stars: 0,
    },
    {
      id: 2,
      name: "Puerto San Nicolás - Sorteo ExpoAgro",
      description:
        "Sistema de sorteo interactivo desarrollado para el stand del Puerto San Nicolás en la ExpoAgro.",
      image: expoagroImg,
      github:
        "https://github.com/juanavilestech/Puerto-San-Nicolas-Sorteo-ExpoAgro",
      demo: "https://puertosannicolas.com/expo/",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      stars: 0,
    },
    {
      id: 3,
      name: "Rent and Go",
      description:
        "Plataforma web integral para gestión, reserva y alquiler de propiedades y viviendas en línea.",
      image: rentandgoImg,
      github: "https://github.com/juanavilestech/rent-and-go",
      demo: "https://rentandgo.com.ar/",
      tech: ["React", "Node.js", "Express"],
      stars: 0,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50 relative"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <img
                  src={
                    project.image ||
                    `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`
                  }
                  alt={project.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-6 backdrop-blur-[2px]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:text-primary-400 hover:bg-white/20 transition-all hover:-translate-y-1"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:text-primary-400 hover:bg-white/20 transition-all hover:-translate-y-1"
                    >
                      <Globe size={24} />
                    </a>
                  )}
                  {project.demoMessage && (
                    <button
                      onClick={() => setActiveMessage(project.demoMessage)}
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:text-primary-400 hover:bg-white/20 transition-all hover:-translate-y-1"
                    >
                      <Globe size={24} />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  {project.stars > 0 && (
                    <div className="flex items-center text-sm text-yellow-500">
                      <Star size={14} className="fill-current mr-1" />
                      {project.stars}
                    </div>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeMessage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMessage(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-700"
            >
              <button
                onClick={() => setActiveMessage(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-4 mb-6 text-primary-600">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl">
                  <Info size={32} />
                </div>
                <h3 className="text-xl font-bold dark:text-white">
                  Acceso al Sistema
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {activeMessage}
              </p>
              <button
                onClick={() => setActiveMessage(null)}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Entendido
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
