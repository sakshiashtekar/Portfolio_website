import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return true;
    return !document.documentElement.classList.contains("light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="relative h-9 w-9 rounded-full border border-border/90 flex items-center justify-center hover:border-primary transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: dark ? 0 : 180, scale: [1, 0.8, 1] }}
        transition={{ duration: 0.4 }}
      >
        {dark ? (
          <Moon className="h-4 w-4 text-primary" />
        ) : (
          <Sun className="h-4 w-4 text-primary" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
