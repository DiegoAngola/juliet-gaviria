import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Mock data simulating Sanity content
const portfolioItems = [
  {
    id: 1,
    category: 'cejas',
    before: 'https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800&auto=format&fit=crop', // Placeholder
    after: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800&auto=format&fit=crop',
    title: 'Microblading Natural'
  },
  {
    id: 2,
    category: 'labios',
    before: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1588510065377-27a9b9d77f72?q=80&w=800&auto=format&fit=crop',
    title: 'Acuarela Lips'
  },
  {
    id: 3,
    category: 'cejas',
    before: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop',
    title: 'Powder Brows'
  },
  {
    id: 4,
    category: 'pestañas',
    before: 'https://images.unsplash.com/photo-1531168556467-80aace0d0144?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1587575494201-11fe74d90d38?q=80&w=800&auto=format&fit=crop',
    title: 'Lifting de Pestañas'
  }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Galería de Resultados</h1>
          <p className="text-white/60 mb-8">La perfección está en los detalles.</p>
          
          <div className="flex justify-center gap-6 text-sm uppercase tracking-widest">
            {['all', 'cejas', 'labios', 'pestañas'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pb-2 border-b-2 transition-colors ${
                  filter === cat ? 'border-brand-gold text-brand-gold' : 'border-transparent text-white/60 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'Todos' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative aspect-square cursor-pointer overflow-hidden bg-white/5"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.after}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-serif text-xl italic">Ver Antes / Después</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <div 
              className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-2">
                <span className="text-brand-gold text-sm uppercase tracking-widest">Antes</span>
                <img src={selectedImage.before} alt="Before" className="w-full rounded-sm" />
              </div>
              <div className="space-y-2">
                <span className="text-brand-gold text-sm uppercase tracking-widest">Después</span>
                <img src={selectedImage.after} alt="After" className="w-full rounded-sm" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
