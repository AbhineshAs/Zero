import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import mistyMountainImage from '../assets/inggrid-koe-kbKEuU-YEIw-unsplash.jpg';
import backwaterImage from '../assets/anil-jose-xavier-Tp-kViKErbw-unsplash.jpg';
import wellnessImage from '../assets/eneko-urunuela-I2YSmEUAgDY-unsplash.jpg';
import spiceTrailImage from '../assets/spice_trail_kerala_1778051074883.png';
import wayanadWildernessImage from '../assets/wayanad_wilderness_1778051091998.png';
import kochiHeritageImage from '../assets/kochi_heritage_streets_1778051115592.png';
import highlandsSanctuaryImage from '../assets/highlands_sanctuary_vagamon_1778051131898.png';
import emeraldEstateImage from '../assets/mohammed-nabeel-ci8XH8VnhWI-unsplash.jpg';
import silentValleyImage from '../assets/sohayok-CiUnNM_3Yjk-unsplash.jpg';
import carnoustieImage from '../assets/carnoustie_resort_kerala_1778135803703.png';
import neeleshwarImage from '../assets/neeleshwar_hermitage_kerala_1778135830872.png';
import royalHeritageImg from '../assets/anantha-krishnan-SQ8igqgfYps-unsplash.jpg';
import vrindaImg from '../assets/anantha-krishnan-zMfvtg7jfuc-unsplash.jpg';

const Experiences = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    region: 'All Destinations',
    sortBy: 'Price: Low to High',
    type: 'All Types'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const itineraries = [
    {
      id: "misty-peaks",
      title: "MISTY PEAKS & SPICE GARDENS",
      tag: "4 DAYS, 3 NIGHTS",
      location: "MUNNAR HIGH RANGES",
      region: "Highlands",
      type: "Nature",
      image: mistyMountainImage,
      desc: "An intimate journey into the heart of Kerala's tea country. Wander through century-old tea estates, breathe in the scent of wild cardamom, and awaken in a colonial-era manor that whispers tales of a bygone era.",
      price: "₹1,85,000",
      numericPrice: 185000
    },
    {
      id: "backwater-solitude",
      title: "THE SOVEREIGN BACKWATER CRUISE",
      tag: "3 DAYS, 2 NIGHTS",
      location: "ALLEPPEY & KUMARAKOM",
      region: "Backwaters",
      type: "Cruise",
      image: backwaterImage,
      desc: "Navigate the crystalline waterways of Vembanad Lake aboard a hand-crafted cedar houseboat. Dine under the stars and wake up to the gentle lapping of the water in your master heritage suite.",
      price: "₹1,15,000",
      numericPrice: 115000
    },
    {
      id: "ancestral-healing",
      title: "ANCESTRAL HEALING & YOGA",
      tag: "7 DAYS, 6 NIGHTS",
      location: "WELLNESS RETREAT",
      region: "Coastal",
      type: "Wellness",
      image: wellnessImage,
      desc: "A transformative sanctuary focused on the ancient science of Ayurveda. Located in a secluded backwater grove, this retreat offers bespoke dietary plans, daily yoga by the water, and treatments that restore the soul.",
      price: "₹3,85,000",
      numericPrice: 385000
    },
    {
      id: "spice-trail",
      title: "THE SPICE TRAIL CHRONICLES",
      tag: "4 DAYS, 3 NIGHTS",
      location: "THEKKADY",
      region: "Highlands",
      type: "Nature",
      image: spiceTrailImage,
      desc: "An immersive exploration of Kerala's legendary spice hills. Trek through ancient plantations, learn the secrets of cardamom and pepper from master farmers, and retreat to a luxury forest villa.",
      price: "₹1,45,000",
      numericPrice: 145000
    },
    {
      id: "wayanad-wilderness",
      title: "WAYANAD WILDERNESS SAFARI",
      tag: "5 DAYS, 4 NIGHTS",
      location: "WAYANAD",
      region: "Highlands",
      type: "Nature",
      image: wayanadWildernessImage,
      desc: "Deep-forest immersion in the Western Ghats. Stay in a high-canopy luxury treehouse, track elusive wildlife with expert naturalists, and experience the raw beauty of unfiltered nature.",
      price: "₹2,10,000",
      numericPrice: 210000
    },
    {
      id: "kochi-heritage",
      title: "ARTISANS OF THE ARABIAN SEA",
      tag: "3 DAYS, 2 NIGHTS",
      location: "FORT KOCHI",
      region: "Coastal",
      type: "Culture",
      image: kochiHeritageImage,
      desc: "A curated walk through history. Explore the Jewish synagogue, witness the legendary Kathakali dancers, and dine in a colonial manor house overlooking the historic harbor.",
      price: "₹85,000",
      numericPrice: 85000
    },
    {
      id: "highlands-sanctuary",
      title: "PRIVATE HIGHLANDS SANCTUARY",
      tag: "3 DAYS, 2 NIGHTS",
      location: "VAGAMON",
      region: "Highlands",
      type: "Wellness",
      image: highlandsSanctuaryImage,
      desc: "Escape to the misty meadows of Vagamon. Stay in a minimalist glass sanctuary perched on a cliff edge, offering 360-degree views of the rolling green hills and absolute silence.",
      price: "₹1,25,000",
      numericPrice: 125000
    },
    {
      id: "royal-heritage",
      title: "THE ROYAL HERITAGE EXPEDITION",
      tag: "4 DAYS, 3 NIGHTS",
      location: "TRIVANDRUM",
      region: "Coastal",
      type: "Culture",
      image: royalHeritageImg,
      desc: "Experience the grandeur of the Travancore royals. Private access to palace galleries, traditional Sadya feasts, and luxury beachfront accommodation in the historic capital.",
      price: "₹1,65,000",
      numericPrice: 165000
    },
    {
      id: "silent-valley",
      title: "SILENT VALLEY SANCTUARY",
      tag: "6 DAYS, 5 NIGHTS",
      location: "PALAKKAD",
      region: "Highlands",
      type: "Nature",
      image: silentValleyImage,
      desc: "Journey into one of the world's last undisturbed rain forests. A scientifically guided expedition focused on biodiversity, staying in an eco-luxury camp on the valley's edge.",
      price: "₹2,75,000",
      numericPrice: 275000
    },
    {
      id: "emerald-estate",
      title: "THE EMERALD ESTATE EXPERIENCE",
      tag: "4 DAYS, 3 NIGHTS",
      location: "NELLIYAMPATHY",
      region: "Highlands",
      type: "Nature",
      image: emeraldEstateImage,
      desc: "High-altitude luxury in the clouds. Stay in a heritage coffee estate bungalow, explore orange groves, and witness the 'Seetharkundu' viewpoint where myths meet the horizon.",
      price: "₹1,40,000",
      numericPrice: 140000
    }
  ];
  
  const featuredResorts = [
    {
      id: "carnoustie",
      name: "Carnoustie Ayurveda & Wellness",
      address: "Mararikulam, Alleppey, Kerala 688530",
      image: carnoustieImage,
      tag: "Ayurveda Retreat",
      price: "₹45,000 / Night"
    },
    {
      id: "neeleshwar",
      name: "Neeleshwar Hermitage",
      address: "Nileshwar, Kasaragod, Kerala 671314",
      image: neeleshwarImage,
      tag: "Beach Escape",
      price: "₹32,000 / Night"
    },
    {
      id: "vrinda",
      name: "The Oberoi Vrinda",
      address: "Alleppey Backwaters, Kerala",
      image: vrindaImg,
      tag: "Luxury Cruise Stay",
      price: "₹1,20,000 / Voyage"
    }
  ];

  const filteredItineraries = itineraries
    .filter(item => {
      const regionMatch = filters.region === 'All Destinations' || item.region === filters.region;
      const typeMatch = filters.type === 'All Types' || item.type === filters.type;
      return regionMatch && typeMatch;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'Price: Low to High') return a.numericPrice - b.numericPrice;
      if (filters.sortBy === 'Price: High to Low') return b.numericPrice - a.numericPrice;
      return 0;
    });

  return (
    <div className="itineraries-page page-transition">
      <Navbar />
      
      <header className="section container" style={{ paddingTop: '150px' }}>
        <div className="section-header centered">
          <ScrollReveal threshold={0}>
            <h1 className="serif" style={{ fontSize: '64px', color: 'var(--accent-gold)', lineHeight: '1.1', letterSpacing: '4px', marginBottom: '30px' }}>
              EXCLUSIVE <br /> ITINERARIES
            </h1>
          </ScrollReveal>
          <ScrollReveal delay="delay-1" threshold={0}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.8', maxWidth: '700px', margin: '0 auto' }}>
              Discover a collection of masterfully crafted journeys through the soul of Kerala. From private houseboat voyages to secluded mountain retreats, every experience is defined by quiet luxury and unparalleled service.
            </p>
          </ScrollReveal>
        </div>

        {/* Filters */}
        <ScrollReveal delay="delay-1" threshold={0} style={{ 
          marginTop: '60px', 
          background: '#141414', 
          border: '1px solid var(--accent-gold)', 
          padding: '40px', 
          borderRadius: '32px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '40px', 
            textAlign: 'left',
            alignItems: 'end'
          }}>
            <div>
              <label style={{ fontSize: '11px', color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>REGION</label>
              <select 
                value={filters.region}
                onChange={(e) => setFilters({...filters, region: e.target.value})}
                style={{ width: '100%', padding: '12px 0', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', color: 'white', outline: 'none', fontSize: '16px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <option value="All Destinations" style={{ background: '#141414' }}>All Destinations</option>
                <option value="Highlands" style={{ background: '#141414' }}>Highlands</option>
                <option value="Backwaters" style={{ background: '#141414' }}>Backwaters</option>
                <option value="Coastal" style={{ background: '#141414' }}>Coastal</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '11px', color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>EXPERIENCE</label>
              <select 
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
                style={{ width: '100%', padding: '12px 0', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', color: 'white', outline: 'none', fontSize: '16px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <option value="All Types" style={{ background: '#141414' }}>All Types</option>
                <option value="Nature" style={{ background: '#141414' }}>Nature</option>
                <option value="Cruise" style={{ background: '#141414' }}>Cruise</option>
                <option value="Wellness" style={{ background: '#141414' }}>Wellness</option>
                <option value="Culture" style={{ background: '#141414' }}>Culture</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '11px', color: 'var(--accent-gold)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>SORT BY</label>
              <select 
                value={filters.sortBy}
                onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                style={{ width: '100%', padding: '12px 0', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', color: 'white', outline: 'none', fontSize: '16px', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                <option value="Price: Low to High" style={{ background: '#141414' }}>Price: Low to High</option>
                <option value="Price: High to Low" style={{ background: '#141414' }}>Price: High to Low</option>
              </select>
            </div>

            <div style={{ textAlign: 'right' }}>
              <button style={{ background: 'transparent', color: 'var(--accent-gold)', border: 'none', fontSize: '12px', letterSpacing: '2px', display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '10px 0' }}>
                 <span style={{ fontSize: '18px' }}>☷</span> ADVANCED FILTERS
              </button>
            </div>
          </div>
        </ScrollReveal>
      </header>

      <section className="section container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '30px' 
        }}>
          {filteredItineraries.length > 0 ? (
            filteredItineraries.map((item, i) => (
              <ScrollReveal key={item.id} className="itinerary-card premium-hover glass" style={{ 
                padding: '25px', 
                border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div className="img-container" style={{ height: '300px', marginBottom: '25px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '9px', letterSpacing: '1px', border: '1px solid var(--accent-gold)', padding: '3px 6px' }}>{item.tag}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '10px', letterSpacing: '1px' }}>/ {item.location}</span>
                </div>

                <h2 className="serif" style={{ fontSize: '26px', marginBottom: '15px', lineHeight: '1.2', flexGrow: 0 }}>{item.title}</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '25px', flexGrow: 1 }}>{item.desc}</p>
                
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '25px' }}>
                  <span style={{ fontSize: '10px', color: 'var(--text-secondary)', letterSpacing: '1px' }}>FROM</span>
                  <span style={{ fontSize: '28px', color: 'var(--accent-gold)', fontWeight: '700' }}>{item.price}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
                  <button onClick={() => navigate('/book-now')} className="btn-explore" style={{ width: '100%', padding: '15px', textAlign: 'center', fontSize: '12px' }}>BOOK ENQUIRY</button>
                  <Link to={`/journey/${item.id}`} className="btn-explore" style={{ width: '100%', padding: '15px', textAlign: 'center', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', fontSize: '12px' }}>EXPLORE ITINERARY</Link>
                </div>
              </ScrollReveal>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '100px 0' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>No itineraries found matching your selected filters.</p>
              <button 
                onClick={() => setFilters({ region: 'All Destinations', sortBy: 'Price: Low to High', type: 'All Types' })}
                style={{ background: 'transparent', border: 'none', color: 'var(--accent-gold)', marginTop: '20px', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section container" style={{ paddingBottom: '100px' }}>
        <ScrollReveal>
          <div className="section-header" style={{ marginBottom: '60px' }}>
            <span className="section-tag">Sanctuaries</span>
            <h2 className="serif" style={{ fontSize: '48px', color: 'white' }}>CURATED SANCTUARIES</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', maxWidth: '600px' }}>
              Iconic stays that define the Keralite luxury experience. From cliffside retreats to floating manors.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px' 
        }}>
          {featuredResorts.map((resort, i) => (
            <ScrollReveal key={resort.id} delay={`delay-${i + 1}`}>
              <div className="resort-luxury-card premium-hover glass" style={{ 
                borderRadius: '32px', 
                overflow: 'hidden', 
                border: '1px solid rgba(212, 175, 55, 0.2)',
                background: 'rgba(20, 20, 20, 0.6)'
              }}>
                <div style={{ height: '400px', position: 'relative' }}>
                  <img src={resort.image} alt={resort.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '40px', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                    <span style={{ color: 'var(--accent-gold)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px', display: 'block' }}>{resort.tag}</span>
                    <h3 className="serif" style={{ fontSize: '28px', color: 'white', marginBottom: '10px' }}>{resort.name}</h3>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>{resort.address}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: 'white', fontWeight: '600' }}>{resort.price}</span>
                      <button onClick={() => navigate('/book-now')} style={{ background: 'var(--accent-gold)', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '40px', fontSize: '11px', fontWeight: '700', cursor: 'pointer' }}>RESERVE</button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <ScrollReveal className="container">
           <div style={{ height: '60px', width: '1px', background: 'var(--accent-gold)', margin: '0 auto 40px' }}></div>
           <h3 style={{ fontSize: '12px', letterSpacing: '4px', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>A CUSTOM MADE PRIVATE JOURNEY</h3>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;
