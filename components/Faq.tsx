"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { eventConfig } from "@/config/event";
import { cinemaEase } from "@/animations/motion";
export function Faq(){const[open,setOpen]=useState<number|null>(0);const[all,setAll]=useState(false);const reduced=useReducedMotion();const items=all?eventConfig.faq:eventConfig.faq.slice(0,8);return <div className="faq-list">{items.map(([question,answer],index)=><div className="faq-item" key={question}><button onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index}><span>{String(index+1).padStart(2,"0")}</span>{question}<Plus className={open===index?"rotate":""} aria-hidden/></button><AnimatePresence initial={false}>{open===index&&<motion.div className="faq-answer" initial={reduced?false:{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={reduced?undefined:{height:0,opacity:0}} transition={{duration:reduced ? .08 : .34,ease:cinemaEase}}><p>{answer}</p></motion.div>}</AnimatePresence></div>)}<button className="faq-more" type="button" onClick={()=>{setAll(!all);setOpen(null)}}>{all?"Réduire les questions":"Voir toutes les questions"}</button></div>}
