import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

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
              © {new Date().getFullYear()} Juan Aviles Tech. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/juanavilestech"
              target="_blank"
              className="hover:text-primary-500 transition-colors"
            >
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/juan-aviles-tech/" target="_blank" className="hover:text-primary-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/juanavilestech" target="_blank" className="hover:text-primary-500 transition-colors">
              <Twitter size={20} />
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
