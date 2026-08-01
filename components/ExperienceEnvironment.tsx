"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function ExperienceEnvironment(){
  const reduced=useReducedMotion();
  const {scrollYProgress}=useScroll();
  const lightY=useTransform(scrollYProgress,[0,1],["-8vh",reduced?"-8vh":"56vh"]);
  const lightX=useTransform(scrollYProgress,[0,.5,1],["-8vw","18vw","-12vw"]);
  const hazeY=useTransform(scrollYProgress,[0,1],["18vh",reduced?"18vh":"-22vh"]);
  return <div className="experience-environment" aria-hidden>
    <motion.i className="environment-light" style={{x:lightX,y:lightY}}/>
    <motion.i className="environment-haze" style={{y:hazeY}}/>
    <div className="environment-grain"/>
    <motion.div className="story-progress" style={{scaleX:scrollYProgress}}/>
  </div>;
}
