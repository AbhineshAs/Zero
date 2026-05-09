import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Bespoke journey details and itinerary details for Zyro Trips.
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import mistyMountainImage from '../assets/inggrid-koe-kbKEuU-YEIw-unsplash.jpg';
import backwaterImage from '../assets/anil-jose-xavier-Tp-kViKErbw-unsplash.jpg';
import wellnessImage from '../assets/eneko-urunuela-I2YSmEUAgDY-unsplash.jpg';
import spiceTrailImage from '../assets/ajin-k-s-0tuzOfs-T3s-unsplash.jpg';
import wayanadWildernessImage from '../assets/jacob-antony-1B3wiVIRqEM-unsplash.jpg';
import kochiHeritageImage from '../assets/anuranj-mp-4JPav-oj83s-unsplash.jpg';
import highlandsSanctuaryImage from '../assets/mitchell-ng-liang-an-j5YwVDEC394-unsplash.jpg';
import emeraldEstateImage from '../assets/mohammed-nabeel-ci8XH8VnhWI-unsplash.jpg';
import silentValleyImage from '../assets/sohayok-CiUnNM_3Yjk-unsplash.jpg';

const JourneyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock data for different journeys
  const journeyData = {
    "misty-peaks": {
      title: "Misty Peaks & Spice Gardens",
      tag: "SIGNATURE COLLECTION",
      image: mistyMountainImage,
      price: "₹1,95,000",
      desc: "An immersive journey through the high ranges of Munnar and the aromatic plantations of Thekkady.",
      itinerary: [
        { day: "01", title: "Arrival in the High Ranges", desc: "Private chauffeur transfer from Kochi. Afternoon tea overlooking the tea estates." },
        { day: "02", title: "The Spice Alchemist's Walk", desc: "A guided exploration through an exclusive cardamom and vanilla forest." },
        { day: "03", title: "Misty Peaks Summit", desc: "Sunrise trek to a private viewpoint with a traditional forest feast." }
      ]
    },
    "backwater-solitude": {
      title: "Backwater Solitude",
      tag: "COLLECTABLE",
      image: backwaterImage,
      price: "₹1,45,000",
      desc: "Slow down to the rhythm of the tides in the tranquil backwaters of Kerala.",
      itinerary: [
        { day: "01", title: "Canal Side Serenity", desc: "Board your private luxury houseboat and begin your journey through the palm-fringed canals." },
        { day: "02", title: "Local Life Immersion", desc: "Visit hidden island villages and witness traditional coir making and fishing." },
        { day: "03", title: "Sunset over the Lake", desc: "A private candlelit dinner on the deck as the sun sets over Vembanad Lake." }
      ]
    },
    "heritage-trails": {
      title: "Ancient Heritage Trails",
      tag: "EXCLUSIVE",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200",
      price: "₹2,55,000",
      desc: "A cultural odyssey through the historic towns and ancient temples of Kerala.",
      itinerary: [
        { day: "01", title: "Fort Kochi Echoes", desc: "Explore the colonial architecture and Jewish heritage of the historic port town." },
        { day: "02", title: "Temple Artistry", desc: "Witness the magnificent murals and architecture of ancient temple complexes." },
        { day: "03", title: "Artisan Encounters", desc: "Meet master craftsmen keeping ancient heritage arts alive in their ancestral workshops." }
      ]
    },
    "ancestral-healing": {
      title: "Ancestral Healing & Yoga",
      tag: "WELLNESS COLLECTION",
      image: wellnessImage,
      price: "₹3,85,000",
      desc: "A transformative sanctuary focused on the ancient science of Ayurveda.",
      itinerary: [
        { day: "01", title: "Rituals of Renewal", desc: "Begin with a private pulse diagnosis by an Ayurvedic master." },
        { day: "02", title: "Yoga by the Water", desc: "Sunrise practice followed by traditional Ksheeradhara treatments." },
        { day: "03", title: "The Sattvic Path", desc: "Cooking workshop and a final immersion in the herbal groves." }
      ]
    },
    "spice-trail": {
      title: "The Spice Trail Chronicles",
      tag: "NATURE COLLECTION",
      image: spiceTrailImage,
      price: "₹1,45,000",
      desc: "An immersive exploration of Kerala's legendary spice hills.",
      itinerary: [
        { day: "01", title: "Scent of Cardamom", desc: "Arrival in the Periyar hills. Private walking tour through spice gardens." },
        { day: "02", title: "Trek to the Horizon", desc: "A guided hike through the dense forest to witness rare endemic flora." },
        { day: "03", title: "Harvest Rituals", desc: "Learn the art of spice processing from local master farmers." }
      ]
    },
    "wayanad-wilderness": {
      title: "Wayanad Wilderness Safari",
      tag: "EXPLORER COLLECTION",
      image: wayanadWildernessImage,
      price: "₹2,10,000",
      desc: "Deep-forest immersion in the Western Ghats.",
      itinerary: [
        { day: "01", title: "Canopy Arrival", desc: "Check into your luxury treehouse. Evening soundscape meditation." },
        { day: "02", title: "Wildlife tracking", desc: "Early morning safari with a specialist naturalist. Track wild elephants." },
        { day: "03", title: "The Rainforest Pulse", desc: "Visit the ancient Edakkal caves and hidden forest waterfalls." }
      ]
    },
    "kochi-heritage": {
      title: "Artisans of the Arabian Sea",
      tag: "CULTURAL COLLECTION",
      image: kochiHeritageImage,
      price: "₹85,000",
      desc: "A curated walk through history in Fort Kochi.",
      itinerary: [
        { day: "01", title: "Merchant Tales", desc: "Guided walk through Jew Town and the spice warehouses." },
        { day: "02", title: "Art of Kathakali", desc: "Private backstage access to the makeup ritual of Kathakali dancers." },
        { day: "03", title: "Sunset Harbours", desc: "Cruise on a traditional boat as the Chinese fishing nets are lowered." }
      ]
    },
    "highlands-sanctuary": {
      title: "Private Highlands Sanctuary",
      tag: "RETREAT COLLECTION",
      image: highlandsSanctuaryImage,
      price: "₹1,25,000",
      desc: "Escape to the misty meadows of Vagamon.",
      itinerary: [
        { day: "01", title: "Cliffside Arrival", desc: "Arrive at your glass sanctuary. Evening stargazing on the deck." },
        { day: "02", title: "Meadow Wander", desc: "Gentle trek through the rolling green hills and pine forests." },
        { day: "03", title: "Silent Reflections", desc: "Morning meditation session with a view of the entire valley." }
      ]
    },
    "royal-heritage": {
      title: "The Royal Heritage Expedition",
      tag: "ROYAL COLLECTION",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=1200",
      price: "₹1,65,000",
      desc: "Experience the grandeur of the Travancore royals.",
      itinerary: [
        { day: "01", title: "Palace Protocol", desc: "Private tour of the Kuthira Malika palace and royal galleries." },
        { day: "02", title: "The Royal Sadya", desc: "Authentic multi-course feast served in the traditional manner." },
        { day: "03", title: "Coastal Grandeur", desc: "Evening at the historic Kovalam beach with a private shore dinner." }
      ]
    },
    "silent-valley": {
      title: "Silent Valley Sanctuary",
      tag: "EXPEDITION COLLECTION",
      image: silentValleyImage,
      price: "₹2,75,000",
      desc: "Journey into one of the world's last undisturbed rain forests.",
      itinerary: [
        { day: "01", title: "Gate to the Silent Valley", desc: "Travel to the forest edge. Briefing by marine and forest biologists." },
        { day: "02", title: "Core Zone Trek", desc: "A rare trek into the core area to see the Lion-tailed Macaque." },
        { day: "03", title: "River of Silence", desc: "Morning walk along the Kunthipuzha river before departure." }
      ]
    },
    "emerald-estate": {
      title: "The Emerald Estate Experience",
      tag: "ESTATE COLLECTION",
      image: emeraldEstateImage,
      price: "₹1,40,000",
      desc: "High-altitude luxury in the clouds of Nelliyampathy.",
      itinerary: [
        { day: "01", title: "Estate Echoes", desc: "Arrival at the heritage bungalow. Evening tea in the orange groves." },
        { day: "02", title: "The Viewpoint Trail", desc: "Drive through the estate to the dramatic Seetharkundu viewpoint." },
        { day: "03", title: "Coffee & Conservation", desc: "Learn about sustainable farming in high-altitude plantations." }
      ]
    }
  };

  const data = journeyData[id] || journeyData["misty-peaks"];

  return (
    <div className="journey-detail page-transition">
      <Navbar />

      <header className="hero" style={{ height: '90vh' }}>
        <img src={data.image} className="hero-bg" alt={data.title} style={{ filter: 'brightness(0.6)' }} />
        <div className="hero-content" style={{ textAlign: 'left', marginLeft: '10%' }}>
          <ScrollReveal threshold={0}>
            <div className="glass premium-hover" style={{ padding: '40px', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)', borderRadius: '24px', maxWidth: '500px' }}>
              <span className="section-tag">{data.tag}</span>
              <h1 className="serif" style={{ fontSize: '48px', color: 'var(--accent-gold)' }}>{data.title}</h1>
              <p style={{ color: 'white', marginTop: '20px' }}>{data.desc}</p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <section className="section container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px' }}>
          <div>
            <span className="section-tag" style={{ color: 'var(--accent-gold)' }}>Exclusive Journey</span>
            <p style={{ fontSize: '24px', lineHeight: '1.4', marginTop: '20px', marginBottom: '60px' }}>
              Follow an ancestral passage through the Western Ghats that transcends standard tourism, offering deep immersion into Kerala's ancient heritage.
            </p>

            <div className="itinerary">
              {data.itinerary.map((item, i) => (
                <ScrollReveal key={i} delay={`delay-${i + 1}`}>
                  <div style={{ display: 'flex', gap: '40px', marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid var(--border-color)' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: '12px', height: '12px', background: 'var(--accent-gold)', borderRadius: '50%', margin: '10px auto' }}></div>
                      <div style={{ fontSize: '12px', color: 'var(--accent-gold)', letterSpacing: '1px' }}>DAY {item.day}</div>
                    </div>
                    <div>
                      <h3 className="serif" style={{ fontSize: '24px', marginBottom: '10px' }}>{item.title}</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="reveal-left" style={{ background: 'var(--bg-secondary)', padding: '60px', borderRadius: '32px', marginTop: '60px' }}>
              <h3 className="serif" style={{ fontSize: '32px', marginBottom: '40px' }}>CURATED INCLUSIONS</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {[
                  "Private Chauffeur Service", "5-Star Heritage Villa Stay",
                  "Personal Butler Service", "Daily Ayurvedic Therapy",
                  "Full Board Gourmet Dining", "Private Local Historian"
                ].map((inc, i) => (
                  <div key={i} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: 'var(--accent-gold)' }}>⬥</div>
                    <span style={{ color: 'var(--text-secondary)' }}>{inc}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <aside>
            <ScrollReveal className="glass premium-hover" style={{ padding: '40px', border: '1px solid var(--accent-gold)', position: 'sticky', top: '120px' }}>
              <span className="section-tag" style={{ fontSize: '10px' }}>STARTING FROM</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginTop: '10px' }}>
                <span style={{ fontSize: '48px', fontWeight: '700' }}>{data.price}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>/ PER GUEST</span>
              </div>

              <div style={{ marginTop: '40px' }}>
                <label style={{ display: 'block', fontSize: '12px', letterSpacing: '1px', marginBottom: '10px', color: 'var(--text-secondary)' }}>PREFERRED DATE</label>
                <input type="date" style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '8px' }} />
              </div>

              <div style={{ marginTop: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', letterSpacing: '1px', marginBottom: '10px', color: 'var(--text-secondary)' }}>NUMBER OF GUESTS</label>
                <select style={{ width: '100%', padding: '15px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '8px' }}>
                  <option>2 Guests (Standard)</option>
                  <option>4 Guests</option>
                  <option>Private Group</option>
                </select>
              </div>

              <button className="btn-explore" onClick={() => navigate('/book-now')} style={{ width: '100%', marginTop: '40px', padding: '20px' }}>RESERVE NOW</button>
              <p style={{ fontSize: '10px', textAlign: 'center', color: 'var(--text-muted)', marginTop: '20px' }}>Terms and conditions apply for seasonal bookings.</p>
            </ScrollReveal>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JourneyDetail;
