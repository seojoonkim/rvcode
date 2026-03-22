"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-card-border">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-muted mb-2">
            진행자: <span className="text-foreground font-medium">Simon Kim (서준)</span>
          </p>
          <p className="text-xs text-muted/60">
            Powered by Claude Code + GitHub + Vercel
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
