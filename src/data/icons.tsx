import { Briefcase, Code2, Globe, Server, Network, Headphones, Users2, LucideIcon } from "lucide-react"
import { ServiceId } from "@/data/content"

export const ICONS: Record<ServiceId, LucideIcon> = {
  consulting: Briefcase,
  software: Code2,
  portals: Globe,
  hosting: Server,
  infrastructure: Network,
  callcenter: Headphones,
  staffing: Users2,
}
