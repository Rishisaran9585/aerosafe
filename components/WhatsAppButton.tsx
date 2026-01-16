
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/971000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center group overflow-hidden"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 overflow-hidden whitespace-nowrap font-bold">
        WhatsApp Us
      </span>
    </a>
  );
};

export default WhatsAppButton;
