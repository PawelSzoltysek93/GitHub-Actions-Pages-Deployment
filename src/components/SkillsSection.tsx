import { useState } from "react";
import { cn } from "../lib/utils";

import {
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiDocker,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiFigma,
  SiExpress,
  SiSupabase,
  SiWordpress,
} from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const skills = [
  //Frontend
  {
    name: "HTML/CSS",
    level: 90,
    category: "frontend",
    icon: <SiHtml5 />,
  },
  {
    name: "JavaScript",
    level: 85,
    category: "frontend",
    icon: <SiJavascript />,
  },
  { name: "React", level: 85, category: "frontend", icon: <SiReact /> },
  {
    name: "TailwindCSS",
    level: 85,
    category: "frontend",
    icon: <SiTailwindcss />,
  },
  {
    name: "Typescript",
    level: 80,
    category: "frontend",
    icon: <SiTypescript />,
  },
  { name: "Next.js", level: 75, category: "frontend", icon: <SiNextdotjs /> },
  { name: "Wordpress", level: 70, category: "frontend", icon: <SiWordpress /> },
  //Backend
  { name: "Node.js", level: 90, category: "backend", icon: <SiNodedotjs /> },
  { name: "Express", level: 85, category: "backend", icon: <SiExpress /> },
  { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb /> },
  {
    name: "PostgreSQL",
    level: 65,
    category: "backend",
    icon: <SiPostgresql />,
  },
  { name: "SupaBase", level: 60, category: "backend", icon: <SiSupabase /> },
  //TOOLS
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: <VscVscodeInsiders />,
  },
  { name: "Git/GitHub", level: 90, category: "tools", icon: <SiGit /> },
  { name: "Figma", level: 80, category: "tools", icon: <SiFigma /> },
  { name: "Docker", level: 70, category: "tools", icon: <SiDocker /> },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary text-glow"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize hover:cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex ">
                <div className="text-4xl mr-4">{skill.icon}</div>
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
