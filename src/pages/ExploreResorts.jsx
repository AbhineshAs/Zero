import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import PropertyCard from '../components/PropertyCard';

import coorgCountyImg from '../assets/unnamed.jpg';
import mahoutImg from '../assets/2023-11-28.jpg';
import mountainViewImg from '../assets/mountain view.jpg';
import blanketImg from '../assets/2025-07-13.jpg';
import valleImg from '../assets/2025-12-21.jpg';
import kumarakomLakeImg from '../assets/jacob-antony-1B3wiVIRqEM-unsplash.jpg';
import zuriImg from '../assets/anantha-krishnan-SQ8igqgfYps-unsplash.jpg';
import vythiriImg from '../assets/pexels-harsh-chikhalia-2194776-3848200.jpg';
import evolveBackImg from '../assets/pexels-vineeth-unni-174296001-33396520.jpg';
import niraamayaImg from '../assets/pexels-shalenderkumar-6652178.jpg';
import leelaImg from '../assets/ajin-k-s-0tuzOfs-T3s-unsplash.jpg';
import spiceVillageImg from '../assets/anuranj-mp-4JPav-oj83s-unsplash.jpg';
import coconutLagoonImg from '../assets/anantha-krishnan-zMfvtg7jfuc-unsplash.jpg';
import fragrantNatureImg from '../assets/avin-cp-Z9dgBPFSa40-unsplash.jpg';
import bruntonImg from '../assets/john-fornander-y3_AHHrxUBY-unsplash.jpg';

const resorts = [
  {
    id: 1,
    name: "Blanket Hotel & Spa",
    location: "Munnar",
    address: "Attukad Waterfall Rd, Pallivasal, Munnar",
    price: "20,000",
    image: blanketImg,
    tag: "Luxury 5 Star"
  },
  {
    id: 2,
    name: "The Valle Munnar",
    location: "Munnar",
    address: "Chithirapuram, Munnar, Kerala 685565",
    price: "11,917",
    image: valleImg,
    tag: "Boutique Resort"
  },
  {
    id: 3,
    name: "Kumarakom Lake Resort",
    location: "Kumarakom",
    address: "Kottayam - Kumarakom Rd, Kumarakom",
    price: "35,000",
    image: kumarakomLakeImg,
    tag: "Heritage Luxury"
  },
  {
    id: 4,
    name: "The Zuri Kumarakom",
    location: "Kumarakom",
    address: "Karottukayal, Kumarakom, Kerala 686563",
    price: "22,500",
    image: zuriImg,
    tag: "Premium Spa"
  },
  {
    id: 5,
    name: "Vythiri Resort",
    location: "Wayanad",
    address: "Lakkidi P.O, Wayanad, Kerala 673576",
    price: "18,000",
    image: vythiriImg,
    tag: "Nature Retreat"
  },
  {
    id: 6,
    name: "Evolve Back",
    location: "Kabini",
    address: "Bheeramballi, Kote, Kabini, Karnataka",
    price: "45,000",
    image: evolveBackImg,
    tag: "Wilderness Luxury"
  },
  {
    id: 7,
    name: "Niraamaya Retreats",
    location: "Kovalam",
    address: "Pulinkudi, Mullur PO, Kovalam, Trivandrum",
    price: "28,000",
    image: niraamayaImg,
    tag: "Wellness & Ayurveda"
  },
  {
    id: 8,
    name: "The Leela Kovalam",
    location: "Kovalam",
    address: "Kovalam Beach Rd, Kovalam, Kerala 695527",
    price: "32,000",
    image: leelaImg,
    tag: "Cliffside Luxury"
  },
  {
    id: 9,
    name: "Spice Village",
    location: "Thekkady",
    address: "Kumily-Thekkady Rd, Thekkady, Kerala",
    price: "15,000",
    image: spiceVillageImg,
    tag: "Eco-Friendly Heritage"
  },
  {
    id: 10,
    name: "Brunton Boatyard",
    location: "Fort Kochi",
    address: "1/498, Calvathy Rd, Fort Kochi, Kochi",
    price: "24,000",
    image: bruntonImg,
    tag: "Colonial Heritage"
  },
  {
    id: 11,
    name: "Coconut Lagoon",
    location: "Kumarakom",
    address: "Kavanattinkara, Kumarakom, Kerala 686563",
    price: "21,000",
    image: coconutLagoonImg,
    tag: "Restored Heritage"
  },
  {
    id: 12,
    name: "Fragrant Nature",
    location: "Kochi",
    address: "Near Bazaar Rd, Mattancherry, Kochi",
    price: "19,500",
    image: fragrantNatureImg,
    tag: "Boutique Luxury"
  },
  {
    id: 13,
    name: "Coorg County Resorts & Spa",
    location: "Coorg",
    address: "Madikeri Road, Coorg, Karnataka 571234",
    price: "5,371",
    image: coorgCountyImg,
    tag: "Luxury Spa"
  },
  {
    id: 14,
    name: "Mahout Resort",
    location: "Kabini",
    address: "Nagarhole Road, Kabini, Karnataka 571114",
    price: "2,904",
    image: mahoutImg,
    tag: "Wilderness Retreat"
  },
  {
    id: 15,
    name: "Mountain View Resort",
    location: "Wayanad",
    address: "Vythiri, Wayanad, Kerala 673576",
    price: "3,886",
    image: mountainViewImg,
    tag: "Mountain Escape"
  }
];

const ExploreResorts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="explore-page page-transition">
      <Navbar />

      <header className="section" style={{ paddingTop: '160px', background: 'var(--bg-primary)', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <span className="section-tag">Curation</span>
            <h1 className="serif" style={{ fontSize: '64px', marginBottom: '20px' }}>ULTIMATE RETREATS</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px', fontSize: '18px' }}>
              A hand-picked collection of Kerala's most extraordinary resorts, heritage homes, and private sanctuaries.
            </p>
          </ScrollReveal>
        </div>
      </header>

      <section className="section container" style={{ paddingBottom: '120px' }}>
        <div className="property-grid">
          {resorts.map((resort, i) => (
            <ScrollReveal key={resort.id} delay={`delay-${(i % 3) + 1}`}>
              <PropertyCard
                title={resort.name}
                price={resort.price}
                image={resort.image}
                badge={resort.tag}
                address={resort.address}
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExploreResorts;
