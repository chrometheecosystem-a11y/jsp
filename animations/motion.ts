import type { Variants } from "framer-motion";

export const cinemaEase = [0.16, 1, 0.3, 1] as const;
export const sceneReveal: Variants = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: .9, ease: cinemaEase } },
};
export const quietHover = { y: -4, transition: { duration: .3, ease: cinemaEase } };
export const sceneViewport = { once: true, amount: .08, margin: "0px 0px 6% 0px" } as const;
