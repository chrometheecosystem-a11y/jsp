"use client";
import { motion, useReducedMotion } from "framer-motion";
import { sceneViewport } from "@/animations/motion";
import { revealVariants } from "@/animations/motion-variants";

export function Reveal({children,className="",delay=0,variant="editorial"}:{children:React.ReactNode;className?:string;delay?:number;variant?:"editorial"|"lateralLeft"|"lateralRight"|"stately"|"quiet"}){
  const reduced=useReducedMotion();
  return <motion.div className={`reveal-cinema reveal-${variant} ${className}`} variants={reduced?undefined:revealVariants[variant]} initial={reduced?false:"hidden"} whileInView={reduced?undefined:"visible"} viewport={sceneViewport} transition={{delay}}>{children}</motion.div>;
}
