"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
};

export function AnimatedSection({
  children,
  className,
  as: Component = "div",
  id,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Component ref={ref} className={cn(className)} id={id}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Component>
  );
}
