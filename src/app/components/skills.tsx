import { Code2, Palette, Database, Layers } from "lucide-react";
import { BlurScrollContainer } from "./animations";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Branding"],
  },
  {
    icon: Layers,
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
  },
];

export function Skills() {
  return (
    <section className="py-24 px-6 relative">
      <BlurScrollContainer>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-lg text-sm border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </BlurScrollContainer>
    </section>
  );
}
