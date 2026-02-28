import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'facial', label: 'Faciales' },
  { id: 'body', label: 'Corporal' },
  { id: 'eyes', label: 'Mirada' },
];

const services = [
  {
    category: 'facial',
    title: 'Higiene Facial Profunda',
    price: '60€',
    duration: '60 min',
    description: 'Limpieza exhaustiva con extracción, alta frecuencia y mascarilla personalizada.'
  },
  {
    category: 'facial',
    title: 'Dermapen (Microneedling)',
    price: '80€',
    duration: '60 min',
    description: 'Tratamiento regenerador que estimula el colágeno y mejora cicatrices y manchas.'
  },
  {
    category: 'body',
    title: 'Maderoterapia Corporal',
    price: 'Desde 60€',
    duration: '50 min',
    description: 'Técnica de masaje con instrumentos de madera para reafirmar y moldear la figura.'
  },
  {
    category: 'eyes',
    title: 'Diseño de Cejas',
    price: '20€',
    duration: '30 min',
    description: 'Estudio de visagismo, depilación con hilo o pinza y tinte (opcional).'
  },
  {
    category: 'eyes',
    title: 'Lifting de Pestañas',
    price: '40€',
    duration: '45 min',
    description: 'Eleva y curva tus pestañas naturales. Incluye tinte para efecto máscara.'
  },
  {
    category: 'eyes',
    title: 'Micropigmentación Eyeliner',
    price: '300€',
    duration: '120 min',
    description: 'Delineado permanente de ojos para una mirada intensa y definida.'
  },
  {
    category: 'facial',
    title: 'Micropigmentación Labios',
    price: '350€',
    duration: '150 min',
    description: 'Técnica acuarela para dar color, corregir asimetrías y definir el contorno.'
  }
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Carta de Servicios</h1>
          <p className="text-white/60 max-w-2xl mx-auto font-light">
            Descubre nuestra selección de tratamientos diseñados para potenciar tu belleza y bienestar.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 border border-transparent",
                activeCategory === cat.id
                  ? "bg-brand-gold text-brand-black"
                  : "bg-white/5 text-white hover:bg-white/10 hover:border-white/20"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-6"
            >
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/5 p-6 md:p-8 hover:border-brand-gold/30 transition-colors rounded-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h3 className="text-xl font-serif font-medium group-hover:text-brand-gold transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-white/40 uppercase tracking-wider">{service.duration}</span>
                      <span className="text-xl font-serif text-brand-gold">{service.price}</span>
                    </div>
                  </div>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
