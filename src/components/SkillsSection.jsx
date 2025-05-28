// import { useState } from "react";
// import { cn } from "@/lib/utils";

// const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "TypeScript", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },
//   { name: "GraphQL", level: 60, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },
// ];

// const categories = ["all", "frontend", "backend", "tools"];

// export const SkillsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("all");

//   const filteredSkills = skills.filter(
//     (skill) => activeCategory === "all" || skill.category === activeCategory
//   );
//   return (
//     <section id="skills" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//           My <span className="text-primary"> Skills</span>
//         </h2>

//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {categories.map((category, key) => (
//             <button
//               key={key}
//               onClick={() => setActiveCategory(category)}
//               className={cn(
//                 "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
//                 activeCategory === category
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-secondary/70 text-forefround hover:bd-secondary"
//               )}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredSkills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card p-6 rounded-lg shadow-xs card-hover"
//             >
//               <div className="text-left mb-4">
//                 <h3 className="font-semibold text-lg"> {skill.name}</h3>
//               </div>
//               <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
//                 <div
//                   className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
//                   style={{ width: skill.level + "%" }}
//                 />
//               </div>

//               <div className="text-right mt-1">
//                 <span className="text-sm text-muted-foreground">
//                   {skill.level}%
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  GitBranch,
  Layout,
  Paintbrush,
  SquareCode,
  Terminal,
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: Paintbrush },
  { name: "JavaScript", category: "frontend", icon: Code },
  { name: "React", category: "frontend", icon: SquareCode },
  { name: "TypeScript", category: "frontend", icon: Code },
  { name: "Tailwind CSS", category: "frontend", icon: Layout },
  { name: "Next.js", category: "frontend", icon: SquareCode },
  // Backend
  { name: "Node.js", category: "backend", icon: Terminal },
  { name: "Express", category: "backend", icon: Terminal },
  { name: "MongoDB", category: "backend", icon: Database },
  { name: "PostgreSQL", category: "backend", icon: Database },
  { name: "GraphQL", category: "backend", icon: Database },
  // Tools
  { name: "Git/GitHub", category: "tools", icon: GitBranch },
  { name: "Docker", category: "tools", icon: SquareCode },
  { name: "Figma", category: "tools", icon: Paintbrush },
  { name: "VS Code", category: "tools", icon: Code },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full font-medium transition-all duration-300 capitalize",
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-secondary/50 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className={cn(
                "bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 skill-card",
                skill.category === "frontend" ? "skill-card-frontend" : ""
              )}
              aria-label={`Skill: ${skill.name}`}
            >
              <div className="flex items-center space-x-3">
                <skill.icon
                  className={cn(
                    "h-6 w-6",
                    skill.category === "frontend"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                      : "text-primary"
                  )}
                />
                <span
                  className={cn(
                    "font-semibold text-base",
                    skill.category === "frontend"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                      : "text-foreground"
                  )}
                >
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
