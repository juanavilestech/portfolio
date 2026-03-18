import React from "react";
import { motion } from "framer-motion";
import { User, Code, Rocket, Brain } from "lucide-react";

const About = () => {
  const stats = [
    {
      label: "Experiencia",
      value: "3+ Años",
      icon: <Rocket className="text-primary-500" />,
    },
    {
      label: "Proyectos",
      value: "+10",
      icon: <Code className="text-primary-500" />,
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6">
                Mi Historia
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Transformando problemas complejos en{" "}
                <span className="gradient-text">soluciones elegantes</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                <p>
                  Soy un Desarrollador Full Stack apasionado con un profundo
                  interés en construir aplicaciones web escalables e integrar
                  Inteligencia Artificial para resolver desafíos del mundo real.
                </p>
                <p>
                  Mi viaje comenzó con curiosidad por cómo funcionan los
                  sistemas digitales, lo que evolucionó hacia una carrera
                  creando arquitecturas backend robustas y experiencias frontend
                  encantadoras. Creo en el código limpio, el diseño centrado en
                  el rendimiento y el aprendizaje continuo.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="glass px-6 py-4 rounded-2xl flex items-center space-x-3 border-l-4 border-l-primary-500">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                    <Code size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold opacity-60 uppercase tracking-wider">
                      Enfoque
                    </div>
                    <div className="font-bold">Desarrollo Full Stack</div>
                  </div>
                </div>
                <div className="glass px-6 py-4 rounded-2xl flex items-center space-x-3 border-l-4 border-l-indigo-500">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                    <Brain size={20} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-sm font-bold opacity-60 uppercase tracking-wider">
                      Especialidad
                    </div>
                    <div className="font-bold">Integraciones IA</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass p-8 rounded-[2rem] group hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-lg hover:shadow-primary-500/10"
              >
                <div className="mb-6 p-4 w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl group-hover:bg-primary-500 group-hover:text-white transition-colors duration-500 flex items-center justify-center">
                  {React.cloneElement(stat.icon, {
                    size: 28,
                    className: "group-hover:text-white transition-colors",
                  })}
                </div>
                <div className="text-4xl font-extrabold mb-2 group-hover:text-primary-500 transition-colors">
                  {stat.value}
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.1em] text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
