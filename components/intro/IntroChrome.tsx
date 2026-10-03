"use client";

import { motion } from "framer-motion";
import { useIntro } from "./intro-context";

/**
 * Fades a piece of fixed chrome in once the intro curtain lifts. For the
 * corner controls, which are not part of the scroll-reveal flow because they
 * never scroll. Wrap the *content* of a fixed element, never the fixed
 * element itself — a transform on it would break its positioning.
 */
export function IntroChrome({
  children,
  className,
  delay = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { revealed } = useIntro();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: revealed ? 1 : 0 }}
      transition={{ duration: 0.6, delay: revealed ? delay : 0, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
