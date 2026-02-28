import { MapPin, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-brand-white mb-4">JULIET GAVIRIA</h3>
            <p className="text-white/60 mb-6 font-light leading-relaxed">
              Especialistas en realzar tu belleza natural a través de técnicas avanzadas de micropigmentación y cuidado facial.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/juliet_gaviria_beauty/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://wa.me/34611178508" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-gold hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-serif text-brand-gold mb-6">Contacto</h4>
            <div className="space-y-4 text-white/80 font-light">
              <p className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} className="text-brand-gold" />
                Calle Príncipe de Vergara 10, Madrid
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="text-brand-gold" />
                +34 611 178 508
              </p>
              <p className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="text-brand-gold" />
                info@julietgaviria.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-serif text-brand-gold mb-6">Horario</h4>
            <ul className="space-y-2 text-white/80 font-light">
              <li className="flex justify-between md:justify-start md:gap-8">
                <span className="w-24">Lunes</span>
                <span>15:00 - 19:30</span>
              </li>
              <li className="flex justify-between md:justify-start md:gap-8">
                <span className="w-24">Mar - Vie</span>
                <span>10:30 - 19:30</span>
              </li>
              <li className="flex justify-between md:justify-start md:gap-8">
                <span className="w-24">Sáb - Dom</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Juliet Gaviria Beauty. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
