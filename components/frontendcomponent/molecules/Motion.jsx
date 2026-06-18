"use client";
import { motion } from "motion/react";

const variants = {
  fadeUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  zoomOut: {
    initial: { scale: 1.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
  zoomIn: {
    initial: { scale: 0.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
  },
};

const Motion = ({ children, variant = "fadeUp", className = "" }) => (
  <motion.div
    className={className}
    initial={variants[variant].initial}
    whileInView={variants[variant].animate}
    viewport={{ once: false }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

export default Motion;
