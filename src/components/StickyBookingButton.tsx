import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StickyBookingButton() {
  return (
    <motion.a
      href="https://www.treatwell.es" // Placeholder
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-40 bg-brand-gold text-brand-black p-4 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
    >
      <Calendar className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-semibold uppercase tracking-wider text-sm">
        Reservar Ahora
      </span>
    </motion.a>
  );
}
