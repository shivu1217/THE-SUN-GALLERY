import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919901090509?text=Hi%2C%20I'm%20interested%20in%20your%20uPVC%20doors%20and%20windows.%20Can%20you%20share%20more%20details%3F"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} color="white" fill="white" />
    </a>
  );
}
