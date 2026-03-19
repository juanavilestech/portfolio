import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Juan Aviles Tech
            </a>
            <p className="mt-2 text-slate-500 text-sm">
              © {new Date().getFullYear()} Juan Aviles Tech. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/juanavilestech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-aviles-tech/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-500 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/juanavilestech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:juanavilestech@gmail.com"
              className="hover:text-primary-500 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
