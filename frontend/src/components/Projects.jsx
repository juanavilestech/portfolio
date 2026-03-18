import React from "react";
import { motion } from "framer-motion";
import { Globe, Github, Star } from "lucide-react";
import expoagroImg from "../../img/expoagro.png";
import rentandgoImg from "../../img/rentandgo.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Puerto San Nicolás - Sorteo ExpoAgro",
      description: "Sistema de sorteo interactivo desarrollado para el stand del Puerto San Nicolás en la ExpoAgro.",
      image: expoagroImg,
      github: "https://github.com/juanavilestech/Puerto-San-Nicolas-Sorteo-ExpoAgro",
      demo: "https://puertosannicolas.com/expo/",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      stars: 0
    },
    {
      id: 2,
      name: "Rent and Go",
      description: "Plataforma web integral para gestión rápida, reserva y alquiler de vehículos en línea.",
      image: rentandgoImg,
      github: "https://github.com/juanavilestech/rent-and-go",
      demo: "https://rentandgo.com.ar/",
      tech: ["React", "Node.js", "Express"],
      stars: 0
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={
                    project.image ||
                    `https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop`
                  }
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-semibold px-2 py-1 rounded-md bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400"
                    >
                      {t}
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
};

export default Projects;
