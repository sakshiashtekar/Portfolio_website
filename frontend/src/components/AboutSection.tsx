import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skillGroups = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    category: "Concepts",
    skills: ["OOP", "Data Structures", "Agile/Scrum"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React", "React Native"],
  },
  {
    category: "API and Data",
    skills: ["REST APIs", "async data", "error states"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Firebase"],
  },
  {
    category: "Testing",
    skills: ["Manual testing", "Postman"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Azure", "VS Code", "Figma"],
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="h-1 w-12 bg-primary rounded-full mb-8" />
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-16">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm a dedicated Software Developer with a keen eye for building reliable,
            user-friendly mobile and web applications. With a solid foundation in modern JavaScript frameworks 
            Java and Object-Oriented Programming, I enjoy turning complex requirements into clean, maintainable code.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            My experience spans React Native mobile development and front-end engineering. 
            I thrive in agile environments and take ownership in delivering end-to-end product solutions, 
            from UI design collaboration to API integration.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Outside of Tech, I've served as the Technical Co-Head of the ACE student
            committee and actively contribute to community initiatives through Prayas Youth
            Forum and NSS volunteering.
          </motion.p>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-foreground mb-2">Skills</h3>
        <div className="h-1 w-12 bg-primary rounded-full mb-10" />
      </motion.div>

      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <h4 className="text-sm font-medium text-primary uppercase tracking-wide mb-3">
              {group.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <motion.div key={s} whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Badge variant="outline" className="text-sm font-normal px-3 py-1.5 border-border/90 hover:border-primary/50 hover:text-primary transition-colors duration-300">
                    {s}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
