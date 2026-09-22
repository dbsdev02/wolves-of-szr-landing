import { MessageCircle } from "lucide-react";
import { project } from "@/data/project";

export function WhatsAppButton() {
  const message = encodeURIComponent("Hello, I would like to learn more about Wolves of SZR.");
  return <a href={`https://wa.me/${project.whatsappNumber}?text=${message}`} target="_blank" rel="noreferrer" className="whatsapp" aria-label="Chat with a property specialist on WhatsApp"><MessageCircle/><span>Chat with a property specialist</span></a>;
}