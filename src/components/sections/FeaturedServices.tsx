import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedServices() {
  return (
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
  );
}
