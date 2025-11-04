"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { motion, useReducedMotion } from "motion/react";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="mx-auto mt-16 max-w-2xl">
      <div className="mb-1 flex gap-3">
        <motion.div
          className="relative"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          transition={shouldReduceMotion ? {} : { type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="https://github.com/maxmurr/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Link to Max Murray's GitHub"
          >
            <Icons.github />
          </Link>
        </motion.div>
        <motion.div
          className="relative"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          transition={shouldReduceMotion ? {} : { type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="https://linkedin.com/in/maxmurr/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Link to Max Murray's LinkedIn"
          >
            <Icons.linkedIn />
          </Link>
        </motion.div>
        <motion.div
          className="relative"
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          transition={shouldReduceMotion ? {} : { type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link
            href="https://x.com/maxmurr__"
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Link to Max Murray's X (Twitter)"
          >
            <Icons.x />
          </Link>
        </motion.div>
      </div>
      <small className="text-muted-foreground">
        Developed by{" "}
        <Link href="https://maxmurr.com" className="text-foreground">
          Max Murray
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
