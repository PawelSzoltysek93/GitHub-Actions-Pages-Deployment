import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  // Przenieś projects do środka komponentu, żeby mieć dostęp do t()
  const projects = [
    {
      id: 1,
      title: "CryptoTraderJS",
      description: t("projects.items.cryptotrader.description"),
      image: "/projects/cryptotraderjs.png",
      tags: ["JavaScript", "Node.js"],
      githubURl: "https://github.com/PawelSzoltysek93/CryptoTraderJS",
    },
    {
      id: 2,
      title: "JobTracker",
      description: t("projects.items.jobtracker.description"),
      image: "/projects/project2.webp",
      tags: ["Next.Js", "TypeScipt", "SupaBase"],
      demoUrl: "#",
      githubURl: "#",
    },
    {
      id: 3,
      title: "E-commerce Shop",
      description: t("projects.items.ecommerce.description"),
      image: "/projects/project3.jpg",
      tags: ["Wordpress", "WooCommerce"],
      demoUrl: "#",
      githubURl: "#",
    },
    {
      id: 4,
      title: t("projects.items.redesign.title"),
      description: t("projects.items.redesign.description"),
      image: "/projects/projectRedesign.png",
      tags: ["TypeScript", "React", "Next.Js"],
      demoUrl: "#",
      githubURl: "https://github.com/PawelSzoltysek93/Next-js-redesign-project",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.title")}{" "}
          <span className="text-primary text-glow">
            {t("projects.titleHighlight")}
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto lg:text-xl">
          {t("projects.subtitle")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-around">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground  mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubURl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/PawelSzoltysek93"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            rel="noopener noreferrer"
          >
            {t("projects.githubButton")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
