import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
            alt="Beauty Salon Atmosphere"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4 block"
          >
            Excelencia en Estética en Madrid
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 leading-tight text-white"
          >
            Realza tu <br />
            <span className="italic text-brand-gold">Belleza Natural</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/microblading"
              className="px-8 py-4 bg-brand-gold text-brand-black font-semibold uppercase tracking-wider hover:bg-white transition-colors min-w-[200px]"
            >
              Microblading
            </Link>
            <Link
              to="/servicios"
              className="px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors min-w-[200px]"
            >
              Ver Tratamientos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Nuestros Servicios Estrella</h2>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Microblading',
                desc: 'Diseño hiperrealista pelo a pelo para unas cejas perfectas.',
                img: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
                link: '/microblading'
              },
              {
                title: 'Labios Acuarela',
                desc: 'Micropigmentación para dar color y definición natural.',
                img: 'https://images.unsplash.com/photo-1588510065377-27a9b9d77f72?q=80&w=800&auto=format&fit=crop',
                link: '/servicios'
              },
              {
                title: 'Faciales Premium',
                desc: 'Higiene profunda y tratamientos antiedad personalizados.',
                img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
                link: '/servicios'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[400px] mb-6 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 font-light mb-4">{service.desc}</p>
                <Link to={service.link} className="inline-flex items-center text-sm uppercase tracking-widest text-brand-gold hover:text-white transition-colors">
                  Descubrir <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 text-brand-gold mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={20} />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-serif italic mb-12 leading-tight">
              "Juliet es una verdadera artista. Mis cejas nunca habían lucido tan naturales y perfectas. El trato es exquisito."
            </h2>
            <div className="text-center">
              <p className="font-serif text-xl">Ana García</p>
              <p className="text-sm text-white/50 uppercase tracking-widest mt-2">Cliente Verificada</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
