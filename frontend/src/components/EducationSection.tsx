import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science (Honors in Data Science)",
    school: "Smt. Kashibai Navale College of Engineering, Pune",
    period: "2020 – 2024",
    grade: "GPA: 8.77 / 10",
  },
  {
    degree: "HSC (12th) — Science",
    school: "S.M. Lohia Junior College, Pune",
    period: "2018 – 2020",
    grade: "78.77%",
  },
  {
    degree: "SSC (10th)",
    school: "Abhinav Vidyalaya English Medium High School, Pune",
    period: "2018",
    grade: "88.60%",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">Education</h2>
        <div className="h-1 w-12 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="space-y-8">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex gap-4 group"
          >
            <div className="mt-1 flex-shrink-0">
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <GraduationCap className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{ed.degree}</h3>
              <p className="text-sm text-muted-foreground">{ed.school}</p>
              <p className="text-xs text-primary mt-1">
                {ed.period} · {ed.grade}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
