import { ExternalLink, Github } from "lucide-react";
import { BlurScrollContainer } from "./animations";

const projects = [
  {
    id: 1,
    title: "Green Generation Landscaping Website",
    description: "A professional website for a local landscaping business to highlight their services and portfolio. ",
    tags: ["React", "Node.js", "Next.js", "Tailwind", "Motion", "NeonDB", "Vercel"],
    demoUrl: "https://www.ggenerationlandscaping.com/",
    githubUrl: "https://github.com/mishkuh/green-generation-landscaping",
  }
];

export function Projects() {
  return (
    <section className="py-24 px-6 bg-muted/30 relative">
      <BlurScrollContainer>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <h3 className="text-2xl mb-4">{project.title}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      </BlurScrollContainer>
    </section>
  );
}
