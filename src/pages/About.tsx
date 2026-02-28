import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                alt="Juliet Gaviria"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold text-brand-black p-6 hidden md:block">
              <span className="font-serif text-3xl block">10+</span>
              <span className="text-sm uppercase tracking-widest">Años de experiencia</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-8">Sobre Juliet</h1>
            <h2 className="text-2xl text-brand-gold mb-6 font-light">Pasión por la belleza natural</h2>
            <div className="space-y-6 text-white/80 font-light leading-relaxed">
              <p>
                Fundadora y directora creativa de Juliet Gaviria Beauty, me he dedicado a perfeccionar el arte de la micropigmentación y el cuidado estético avanzado.
              </p>
              <p>
                Mi filosofía se basa en el "menos es más". No busco transformar rostros, sino realzar la belleza única que cada persona ya posee. Cada trazo en un microblading y cada tratamiento facial está diseñado con una precisión obsesiva y un profundo respeto por la armonía facial.
              </p>
              <p>
                Formada internacionalmente en las técnicas más vanguardistas (Phibrows, Micropigmentación Paramédica), mi objetivo es ofrecerte no solo un servicio, sino una experiencia de confianza y excelencia en pleno corazón de Madrid.
              </p>
            </div>
          </motion.div>
        </div>

        {/* The Space */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">El Espacio</h2>
            <p className="text-white/60">Un oasis de calma en Príncipe de Vergara</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop"
              alt="Salon Interior 1"
              className="w-full h-64 object-cover rounded-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop"
              alt="Salon Interior 2"
              className="w-full h-64 object-cover rounded-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1630293420863-4356330adf13?q=80&w=800&auto=format&fit=crop"
              alt="Salon Interior 3"
              className="w-full h-64 object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
