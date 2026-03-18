import React, { useState } from "react";
import axios from "axios";
import { Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mantenernos en contacto</h2>
            <p className="text-slate-600 dark:text-slate-400">
              ¿Tienes un proyecto en mente o solo quieres saludar? ¡No dudes en escribirme!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="Tu Nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea
                required
                rows="5"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full flex-grow bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none transition-all resize-none"
                placeholder="¿Cómo puedo ayudarte?"
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-3 rounded-full font-medium flex items-center space-x-2 transition-all transform hover:scale-105 disabled:opacity-50"
              >
                {status === "success" ? (
                  <>
                    <CheckCircle size={20} />
                    <span>¡Mensaje Enviado!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>
                      {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                    </span>
                  </>
                )}
              </button>
            </div>
            {status === "error" && (
              <p className="md:col-span-2 text-center text-red-500 mt-4">
                Algo salió mal. Por favor, inténtalo de nuevo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
