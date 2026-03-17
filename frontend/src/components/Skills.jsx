import React from "react";
import {
  Code2,
  Database,
  Layout,
  Server,
  Cpu,
  Globe,
  Terminal,
  Smartphone,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-500" />,
      skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      icon: <Server className="text-green-500" />,
      skills: ["Node.js", "Express", "FastAPI", "Python", "PHP"],
    },
    {
      title: "Database & Tools",
      icon: <Database className="text-purple-500" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Docker"],
    },
    {
      title: "AI & Others",
      icon: <Cpu className="text-amber-500" />,
      skills: [
        "Hugging Face",
        "AI Integration",
        "Automation",
        "SEO",
        "Technical Support",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass p-8 rounded-2xl border-t-4 border-primary-500 hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center text-slate-600 dark:text-slate-400"
                  >
                    <Zap size={14} className="mr-2 text-primary-500" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
