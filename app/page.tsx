import Navbar from '@/components/Navbar';
import LandingHero from '@/components/LandingHero';
import Donations from '@/components/Donations';
import AboutUs from '@/components/AboutUs';
import CharityPartner from '@/components/CharityPartner';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingHero />
      <Donations />
      <Sponsors />
      <CharityPartner />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
