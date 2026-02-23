import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  "Technical Co-Head of ACE (Association of Computer Engineers) student committee — organized tech events, workshops, and hackathons.",
  "Active volunteer with Prayas Youth Forum & NSS — contributed to community service and social awareness initiatives.",
  "Anchored multiple college-level technical and cultural events.",
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24 px-6 bg-card/50">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-foreground mb-2">Achievements</h2>
        <div className="h-1 w-12 bg-primary rounded-full mb-12" />
      </motion.div>

      <div className="space-y-6">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex gap-4 group"
          >
            <div className="mt-0.5 flex-shrink-0">
              <Award className="h-5 w-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
            </div>
            <p className="text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
