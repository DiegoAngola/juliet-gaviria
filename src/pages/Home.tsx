import Hero from '@/components/sections/Hero';
import FeaturedServices from '@/components/sections/FeaturedServices';
import Testimonials from '@/components/sections/Testimonials';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <FeaturedServices />
      <Testimonials />
    </div>
  );
}
