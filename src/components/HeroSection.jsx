// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Manu
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Abhishek
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I build dynamic, user-centric web applications with modern front-end
//             technologies like React, Angular, Next.js, Vue.js, and Tanstack
//             Query for seamless data management, complemented by robust back-end
//             expertise in Node.js, PostgreSQL, MongoDB, and Supabase, delivering
//             visually stunning and high-performance interfaces.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Manu
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Abhishek
            </span>
          </h1>

          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-relaxed">
              I craft{" "}
              <span className="font-semibold text-primary">
                dynamic, user-centric web applications
              </span>{" "}
              with modern front-end tools like{" "}
              <span className="font-medium">
                React, Angular, Next.js, Vue.js
              </span>
              , and <span className="font-medium">Tanstack Query</span>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3 leading-relaxed">
              My back-end expertise in{" "}
              <span className="font-medium">Node.js, PostgreSQL, MongoDB</span>,
              and <span className="font-medium">Supabase</span> ensures
              scalable, high-performance solutions that captivate and deliver.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 pt-4 opacity-0 animate-fade-in-delay-4">
            {[
              "React",
              "Angular",
              "Next.js",
              "Vue.js",
              "Tanstack Query",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "Supabase",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md hover:bg-primary/90 transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown
          className="h-5 w-5 text-primary"
          aria-label="Scroll down to explore"
        />
      </div>
    </section>
  );
};
