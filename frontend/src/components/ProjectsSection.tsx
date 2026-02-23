import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import projectExpertease from "@/assets/project-expertease.jpg";
import projectExpenseTracker from "@/assets/project-expense-tracker.jpg";
import projectDrmaya from "@/assets/project-drmaya.jpg";
import projectPlanetgeo from "@/assets/project-planetgeo.jpg";

const projects = [
  {
    title: "ExpertEase",
    description:
      "A mobile app connecting users with service professionals like plumbers, electricians, and tutors. Features real-time booking, service browsing, and user reviews.",
    tags: ["React Native", "Figma", "Supabase"],
    github: "https://github.com/sakshiashtekar/ExpertEase",
    image: projectExpertease,
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance app to track daily expenses, visualize spending habits with charts, and manage budgets across categories.",
    tags: ["React", "TypeScript", "Firebase"],
    github: "https://github.com/sakshiashtekar/Expense-Tracker",
    image: projectExpenseTracker,
  },
  {
    title: "Dr. Maya Therapy Website",
    description:
      "A professional website for a wellness and counseling service, featuring appointment booking, service details, and a calming modern design.",
    tags: ["NextJS", "Tailwind-CSS", "Vercel"],
    github: "https://github.com/sakshiashtekar/Dr.Maya-Therapy-website",
    live: "https://dr-maya-therapy-website-rho.vercel.app/",
    image: projectDrmaya,
  },
  {
    title: "Planet Geo Tech App",
    description:
      "An employee attendance tracking application with check-in/check-out, time logs, calendar views, and real-time attendance monitoring dashboard.",
    tags: ["React Native", "Figma"],
    github: "https://github.com/sakshiashtekar/Planet_geo_tech_app",
    image: projectPlanetgeo,
  },
];

// Duplicate for seamless loop
const duplicated = [...projects, ...projects];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-2">Projects</h2>
          <div className="h-1 w-12 bg-primary rounded-full mb-12" />
        </motion.div>
      </div>

      {/* Continuous marquee scroll */}
      <div className="relative group">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ willChange: "transform" }}
        >
          {duplicated.map((p, i) => (
            <motion.div
              key={`${p.title}-${i}`}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group/card w-[350px] flex-shrink-0 rounded-xl border border-border/50 bg-card overflow-hidden hover:border-primary/40 transition-colors duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 items-center flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-border/90 text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  {"live" in p && p.live && (
                    <a
                      href={(p as any).live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-btn bg-background text-foreground"
                    >
                      <ArrowUpRight className="h-4 w-4" /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* View more on GitHub */}
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sakshiashtekar"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn bg-background text-foreground"
          >
            View more projects on GitHub <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
