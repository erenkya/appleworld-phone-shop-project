"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Tag = "div" | "section" | "ul" | "li" | "span" | "p" | "h2" | "header";

const MOTION = {
  div: motion.div,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  header: motion.header,
} as const;

/**
 * Scroll ile tetiklenen aşağıdan yumuşak beliriş.
 * `stagger` verildiğinde içindeki <RevealItem>'lar sırayla gelir.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  y = 20,
  stagger,
  once = true,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = MOTION[as];

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: reduce ? 0 : stagger ?? 0,
      },
    },
  };

  const single: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: EASE, delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={stagger != null ? container : single}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-12% 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function RevealItem({
  children,
  as = "div",
  className,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
}) {
  const MotionTag = MOTION[as];
  return (
    <MotionTag className={className} variants={itemVariants}>
      {children}
    </MotionTag>
  );
}
