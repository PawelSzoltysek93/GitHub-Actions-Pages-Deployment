import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CryptoTraderJS",
    description:
      "My first project fully build in JavaScript, completely in node.js terminal showing my skills in working with different APIs and fetching data.",
    image: "/projects/cryptotraderjs.png",
    tags: ["JavaScript", "Node.js"],

    githubURl: "https://github.com/PawelSzoltysek93/CryptoTraderJS",
  },
  {
    id: 2,
    title: "JobTracker",
    description:
      "My Simple application  in Next.js which I created for my own usage but it enrolled into something bigger allowing users creating own accounts and track their applying process",
    image: "/projects/project2.webp",
    tags: ["Next.Js", "TypeScipt", "SupaBase"],
    demoUrl: "#",
    githubURl: "#",
  },
  {
    id: 3,
    title: "E-commerce Shop",
    description:
      "My own E-commerce shop created in Next.js with basic shop functionality",
    image: "/projects/project3.jpg",
    tags: ["TypeScript", "React", "TailwindCSS"],
    demoUrl: "#",
    githubURl: "#",
  },
  {
    id: 4,
    title: "Re-design Project",
    description:
      "Redesign project in which my task was to rebuild an old website with a modern look and improved user experience using new technologies such as React and Next.js.",
    image: "/projects/projectRedesign.png",
    tags: ["TypeScript", "React", "Next.Js"],
    demoUrl: "#",
    githubURl: "https://github.com/PawelSzoltysek93/Next-js-redesign-project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary text-glow"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto lg:text-xl">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance and user experience.
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
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
