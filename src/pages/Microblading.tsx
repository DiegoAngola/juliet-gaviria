import { motion } from 'framer-motion';
import { Check, Clock, Shield, AlertCircle } from 'lucide-react';

export default function Microblading() {
  return (
    <div className="pt-24 pb-12">
      {/* Header */}
      <section className="relative py-20 px-6 mb-16">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Servicio Estrella
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8"
          >
            Microblading & <br />
            <span className="italic text-white/80">Micropigmentación</span>
          </motion.h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
            La técnica más avanzada para lograr unas cejas hiperrealistas. Diseñamos tu mirada pelo a pelo, respetando tu fisonomía natural.
          </p>
        </div>
      </section>

      {/* Pricing & Details */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop"
                alt="Microblading Process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-black p-8 max-w-xs hidden md:block">
              <p className="font-serif text-2xl italic mb-2">"El arte de la precisión"</p>
              <p className="text-sm uppercase tracking-widest">Juliet Gaviria</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif mb-6">Precios y Sesiones</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-medium">Microblading / Microshading</h3>
                    <p className="text-white/50 text-sm mt-1">Incluye diseño y primera sesión</p>
                  </div>
                  <span className="text-2xl font-serif text-brand-gold">300€ - 350€</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl font-medium">Retoque (4-6 semanas)</h3>
                    <p className="text-white/50 text-sm mt-1">Perfeccionamiento del color y forma</p>
                  </div>
                  <span className="text-2xl font-serif text-brand-gold">Consultar</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-6">¿Por qué elegirnos?</h2>
              <ul className="space-y-4">
                {[
                  'Diseño personalizado basado en visagismo',
                  'Pigmentos orgánicos de alta calidad',
                  'Material 100% desechable y estéril',
                  'Seguimiento post-tratamiento'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-white/80 font-light">
                    <Check className="text-brand-gold shrink-0 mt-1" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 p-8 border border-white/10">
              <div className="flex items-start gap-4">
                <Clock className="text-brand-gold shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-2">Duración del Tratamiento</h4>
                  <p className="text-white/60 font-light text-sm">
                    La sesión inicial dura aproximadamente 2.5 horas. Los resultados duran entre 12 y 18 meses, dependiendo del tipo de piel y cuidados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Healing Process */}
      <section className="bg-white/5 py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif mb-12 text-center">Proceso de Cicatrización</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-black p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-serif text-brand-gold">01</span>
                <h3 className="text-xl font-medium">Días 1-3</h3>
              </div>
              <p className="text-white/60 font-light">
                Las cejas se verán más oscuras y definidas de lo normal. Es parte del proceso de oxidación del pigmento.
              </p>
            </div>
            <div className="bg-brand-black p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-serif text-brand-gold">02</span>
                <h3 className="text-xl font-medium">Días 4-7</h3>
              </div>
              <p className="text-white/60 font-light">
                Comienza una ligera descamación. Es crucial no arrancar las costras y mantener la zona hidratada según las indicaciones.
              </p>
            </div>
            <div className="bg-brand-black p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-serif text-brand-gold">03</span>
                <h3 className="text-xl font-medium">Días 8-14</h3>
              </div>
              <p className="text-white/60 font-light">
                El color puede parecer que ha desaparecido ("fase fantasma"). La piel nueva está cubriendo el pigmento.
              </p>
            </div>
            <div className="bg-brand-black p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-serif text-brand-gold">04</span>
                <h3 className="text-xl font-medium">Días 15-30</h3>
              </div>
              <p className="text-white/60 font-light">
                El color resurge y se asienta. Es el momento de evaluar si es necesario un retoque para perfeccionar.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-24 bg-brand-gold text-brand-black text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">¿Lista para transformar tu mirada?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Reserva tu cita de valoración gratuita y descubre el diseño perfecto para ti.</p>
          <a
            href="https://www.treatwell.es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-black text-white px-8 py-4 font-semibold uppercase tracking-wider hover:bg-white hover:text-brand-black transition-colors"
          >
            Reservar Cita Online
          </a>
        </div>
      </section>
    </div>
  );
}
