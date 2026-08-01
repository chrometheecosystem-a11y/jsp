"use client";
import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/animations/motion-variants";

export function StaggerGroup({children,className=""}:{children:React.ReactNode;className?:string}){const reduced=useReducedMotion();return <motion.div className={className} variants={reduced?undefined:staggerContainer} initial={reduced?false:"hidden"} whileInView={reduced?undefined:"visible"} viewport={{once:true,amount:.12}}>{children}</motion.div>}
export function StaggerItem({children,className=""}:{children:React.ReactNode;className?:string}){return <motion.div className={className} variants={staggerItem}>{children}</motion.div>}
