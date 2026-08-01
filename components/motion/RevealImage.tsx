"use client";
import { motion, useReducedMotion } from "framer-motion";
import { luxuryEase } from "@/animations/motion-variants";

export function RevealImage({children,className=""}:{children:React.ReactNode;className?:string}){
  const reduced=useReducedMotion();
  return <motion.div className={`motion-image ${className}`} initial={reduced?false:{clipPath:"inset(9% 0 9% 0)",opacity:.35}} whileInView={reduced?undefined:{clipPath:"inset(0% 0 0% 0)",opacity:1}} viewport={{once:true,amount:.18}} transition={{duration:1.15,ease:luxuryEase}}><motion.div className="motion-image-inner" initial={reduced?false:{scale:1.045}} whileInView={reduced?undefined:{scale:1}} viewport={{once:true,amount:.18}} transition={{duration:1.35,ease:luxuryEase}}>{children}</motion.div></motion.div>;
}
