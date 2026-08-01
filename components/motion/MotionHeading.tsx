"use client";
import { motion, useReducedMotion } from "framer-motion";
import { luxuryEase } from "@/animations/motion-variants";

export function MotionHeading({children,className=""}:{children:React.ReactNode;className?:string}){
  const reduced=useReducedMotion();
  return <h2 className={`motion-heading ${className}`}><motion.span initial={reduced?false:{y:"108%",opacity:0}} whileInView={reduced?undefined:{y:0,opacity:1}} viewport={{once:true,amount:.2,margin:"0px 0px -10% 0px"}} transition={{duration:.9,ease:luxuryEase}}>{children}</motion.span></h2>;
}
