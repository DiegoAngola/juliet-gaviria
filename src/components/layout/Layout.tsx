import Navbar from './Navbar';
import Footer from './Footer';
import StickyBookingButton from '../common/StickyBookingButton';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-gold selection:text-black">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
}
