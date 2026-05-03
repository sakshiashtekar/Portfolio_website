import { motion } from "framer-motion";

const experiences = [
  {
    company: "LTIMindtree",
    role: "Graduate Engineer Trainee",
    period: "Aug 2024 – Present",
    points: [
      "Completed training in Java, OOP, DBMS, and Spring Boot.",
      "Developed a blood bank management system using Java and MySQL.",
      "Participated in hackathon focused on asset management solutions.",
    ],
  },
  {
    company: "Whatbytes",
    role: "React Native Intern",
    period: "Jan 2024 – Jun 2024",
    points: [
      "Built ExpertEase mobile app connecting users with service professionals.",
      "Designed wireframes in Figma and developed cross-platform UI components.",
      "Integrated REST APIs and implemented real-time booking features.",
    ],
  },
  {
    company: "Planet Geo Tech",
    role: "Mobile App Developer",
    period: "Nov 2023 – Sep 2024",
    points: [
      "Designed app wireframes and UI flows using Figma",
      "Implemented UI screens in React Native and integrated live location services",
      "Designed and developed app architecture using OOP concepts and handled API integration",
      "Improved usability and responsiveness across screens",
      "Setup Mysql database",
    ],
  },
  {
    company: "Cyret Technologies",
    role: "Technical Support Intern",
    period: "Feb 2023 – Mar 2023",
    points: [
      "Provided technical support for cybersecurity tools and products.",
      "Assisted with vulnerability assessments and security audits.",
      "Created documentation for troubleshooting processes.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 px-6 bg-card/50">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">Experience</h2>
        <div className="h-1 w-12 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background transition-transform duration-300 group-hover:scale-125" />
            <p className="text-xs text-primary uppercase tracking-wide mb-1">
              {exp.period}
            </p>
            <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
            <p className="text-sm text-muted-foreground mb-3">{exp.company}</p>
            <ul className="space-y-1">
              {exp.points.map((p, j) => (
                <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                  • {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
