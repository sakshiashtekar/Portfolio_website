import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowDown, Download } from "lucide-react";

const HeroSection = () => (
  <section
    id="hero"
    className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden"
  >
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-2xl text-center relative z-10"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-sm uppercase tracking-widest text-primary mb-4"
      >
        Hello, I'm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-4"
      >
        Sakshi Ashtekar
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-xl text-primary mb-2"
      >
        Software Developer
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-base text-muted-foreground max-w-lg mx-auto mb-8"
      >
        Product-driven software engineer building production-ready mobile applications end-to-end.
        Strong in Frontend, Javascript, and OOP, delivering scalable, intuitive features from concept to development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex items-center justify-center flex-wrap gap-3"
      >
        <a
          href="mailto:sakshiashtekar245@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/90 text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-300"
        >
          <Mail className="h-4 w-4" /> Email
        </a>
        <a
          href="https://github.com/sakshiashtekar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/90 text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-300"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sakshi-ashtekar-469bb1223"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/90 text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-300"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a
          href="/Sakshi_Ashtekar_Developer.pdf"
          download
          className="neon-btn bg-background text-foreground"
        >
          <Download className="h-4 w-4" /> Resume
        </a>
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
