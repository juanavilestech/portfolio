import React from "react";
import { motion } from "framer-motion";
import { Code, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
      </div>
    </section>
  );
};

export default About;
