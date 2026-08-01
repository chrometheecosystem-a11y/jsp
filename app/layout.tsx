import type { Metadata } from "next";
import "./globals.css";
import { event } from "@/config/event";

export const metadata:Metadata={metadataBase:new URL(event.siteUrl),title:`${event.name} — Deux jours pour transformer ton réseau`,description:event.description,alternates:{canonical:"/"},openGraph:{title:`${event.name} — Deux jours pour transformer ton réseau`,description:event.description,type:"website",locale:"fr_FR",url:"/",images:[{url:event.images.hero,width:1672,height:941,alt:"Château privatisé en Bretagne"}]},twitter:{card:"summary_large_image",title:`${event.name} — Deux jours pour transformer ton réseau`,description:event.description,images:[event.images.hero]},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
