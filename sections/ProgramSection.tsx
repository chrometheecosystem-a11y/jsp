"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { eventConfig } from "@/config/event";
import { Reveal } from "@/components/Reveal";
import { MotionHeading } from "@/components/motion/MotionHeading";
import { SectionTransition } from "@/components/motion/SectionTransition";
import { luxuryEase } from "@/animations/motion-variants";

export function ProgramSection(){
  const [open,setOpen]=useState(0);
  const reduced=useReducedMotion();
  return <section id="programme" className="cinematic-section program-scene">
    <div className="wrap">
      <Reveal variant="lateralLeft"><p className="eyebrow">Le programme officiel</p><MotionHeading>Trois jours. Assez de temps pour réellement se rencontrer.</MotionHeading></Reveal>
      <div className="program-timeline">{eventConfig.schedule.map((day,index)=><Reveal variant="quiet" className={`program-day ${open===index?"open":""}`} key={day.day} delay={index*.05}>
        <button onClick={()=>setOpen(open===index?-1:index)} aria-expanded={open===index} aria-controls={`program-day-${index}`}><span>{String(index+1).padStart(2,"0")}</span><div><small>{day.day}</small><h3>{day.date}</h3></div><ChevronDown/></button>
        <AnimatePresence initial={false}>{open===index&&<motion.div id={`program-day-${index}`} className="program-detail-motion" initial={reduced?false:{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced ? .15 : .46,ease:luxuryEase}}>
          <motion.div initial={reduced?false:{y:14}} animate={{y:0}} exit={{y:8}} transition={{duration:reduced ? .1 : .38,ease:luxuryEase}}><p>{day.note}</p><ol>{day.items.map(item=><li key={item}>{item}</li>)}</ol></motion.div>
        </motion.div>}</AnimatePresence>
      </Reveal>)}</div>
    </div>
    <SectionTransition type="gold-line"/>
  </section>;
}
