import type { Variants } from "framer-motion";

export const luxuryEase = [0.16, 1, 0.3, 1] as const;
export const softEase = [0.22, 1, 0.36, 1] as const;

export const revealVariants: Record<string, Variants> = {
  editorial: { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: .82, ease: luxuryEase } } },
  lateralLeft: { hidden: { opacity: 0, x: -14 }, visible: { opacity: 1, x: 0, transition: { duration: .86, ease: luxuryEase } } },
  lateralRight: { hidden: { opacity: 0, x: 14 }, visible: { opacity: 1, x: 0, transition: { duration: .86, ease: luxuryEase } } },
  stately: { hidden: { opacity: 0, y: 38, scale: .992 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: .92, ease: luxuryEase } } },
  quiet: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: .65, ease: softEase } } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: .1, delayChildren: .08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: .64, ease: luxuryEase } },
};
