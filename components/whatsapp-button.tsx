import { whatsappLink } from "@/lib/site";
import { ChatIcon } from "./icons";

type Props = {
  message: string;
  label: string;
  variant?: "light" | "blue";
  className?: string;
};

export function WhatsAppButton({ message, label, variant = "light", className = "" }: Props) {
  return (
    <a
      className={`button button-${variant} ${className}`}
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
    >
      <ChatIcon />
      {label}
    </a>
  );
}
