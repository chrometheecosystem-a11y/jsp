export type TransitionType="dark-veil"|"warm-gradient"|"light-sweep"|"image-dissolve"|"gold-line"|"soft-fade";
export function SectionTransition({type}:{type:TransitionType}){return <div className={`section-transition transition-${type}`} aria-hidden/>}
