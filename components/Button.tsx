import { ArrowUpRight } from "lucide-react";
export function Button({href,children,variant="gold",className=""}:{href:string;children:React.ReactNode;variant?:"gold"|"ghost"|"light";className?:string}){
  return <a href={href} className={`button button-${variant} ${className}`}>{children}<ArrowUpRight aria-hidden size={17}/></a>;
}
