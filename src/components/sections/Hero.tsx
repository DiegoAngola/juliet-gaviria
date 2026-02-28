import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
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
  );
}
