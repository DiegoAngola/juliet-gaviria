import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-serif mb-8">Contacto</h1>
            <p className="text-white/60 font-light text-lg mb-12 leading-relaxed">
              Estamos ubicados en el corazón del Barrio de Salamanca. Reserva tu cita online o contáctanos para cualquier consulta.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-serif mb-2">Ubicación</h3>
                  <p className="text-white/80 font-light">Calle Príncipe de Vergara 10</p>
                  <p className="text-white/80 font-light">28001 Madrid, España</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-brand-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-serif mb-2">Horario</h3>
                  <div className="grid grid-cols-[100px_1fr] gap-y-2 text-white/80 font-light">
                    <span>Lunes</span>
                    <span>15:00 - 19:30</span>
                    <span>Mar - Vie</span>
                    <span>10:30 - 19:30</span>
                    <span>Sáb - Dom</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-brand-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-serif mb-2">Teléfono</h3>
                  <p className="text-white/80 font-light">+34 611 178 508</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-brand-gold mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-serif mb-2">Email</h3>
                  <p className="text-white/80 font-light">info@julietgaviria.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-white/5 rounded-sm overflow-hidden border border-white/10 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-3.6850!3d40.4250!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289012345678%3A0x1234567890abcdef!2sC.%20del%20Pr%C3%ADncipe%20de%20Vergara%2C%2010%2C%2028001%20Madrid!5e0!3m2!1sen!2ses!4v1600000000000!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Overlay to match dark theme better if map style isn't perfect */}
            <div className="absolute inset-0 bg-brand-black/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
