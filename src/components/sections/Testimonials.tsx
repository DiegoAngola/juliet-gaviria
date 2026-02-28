import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
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
  );
}
