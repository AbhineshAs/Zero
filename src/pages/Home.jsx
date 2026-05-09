import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Commitment from '../components/Commitment';
import Journeys from '../components/Journeys';
import FeaturedStays from '../components/FeaturedStays';
import PageSamples from '../components/PageSamples';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

import Philosophy from '../components/Philosophy';
import HeritageGallery from '../components/HeritageGallery';
import LuxuryDefined from '../components/LuxuryDefined';
import CulturalEvents from '../components/CulturalEvents';
import GuestExperience from '../components/GuestExperience';

const Home = () => {
  return (
    <div className="home-page page-transition">
      <Navbar />
      <main className="page-transition">
        <Hero />
        <Commitment />
        <Philosophy />
        <LuxuryDefined />
        <CulturalEvents />
        <GuestExperience />
        <PageSamples />
        <Journeys />
        <HeritageGallery />
        <FeaturedStays />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
