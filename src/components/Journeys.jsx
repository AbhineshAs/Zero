import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import mistyMountainImage from '../assets/inggrid-koe-kbKEuU-YEIw-unsplash.jpg';
import backwaterImage from '../assets/anil-jose-xavier-Tp-kViKErbw-unsplash.jpg';
import heritageTrailImage from '../assets/pexels-vineeth-unni-174296001-33396520.jpg';

const Journeys = () => {
  const mountainPath = mistyMountainImage;
  const backwaterPath = backwaterImage;
  const heritagePath = heritageTrailImage;

  return (
    <section id="journeys" className="section container">
      <ScrollReveal>
        <div className="section-header centered" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Collectable</span>
          <h2 className="serif" style={{ fontSize: '48px', margin: '0 auto 20px' }}>SELECTED JOURNEYS</h2>
          <Link to="/journeys" style={{ color: 'var(--accent-gold)', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', borderBottom: '1px solid var(--accent-gold)', paddingBottom: '5px', fontWeight: '600', display: 'inline-block' }}>
            VIEW ALL JOURNEYS
          </Link>
        </div>
      </ScrollReveal>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
        <ScrollReveal className="reveal-left">
          <Link to="/journey/misty-peaks" className="premium-hover" style={{ display: 'block', position: 'relative', borderRadius: '30px', overflow: 'hidden', height: '400px' }}>
            <img 
              src={mountainPath} 
              alt="Misty Mountains" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544735745-b44583b48873?auto=format&fit=crop&q=80&w=2000'; }}
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-end', 
              padding: '40px' 
            }}>
              <h3 className="serif" style={{ fontSize: '32px', color: 'white' }}>Misty Munnar Trails</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>Explore the lush green tea estates and winding roads.</p>
            </div>
          </Link>
        </ScrollReveal>

        <ScrollReveal className="reveal-right">
          <Link to="/journey/backwater-solitude" className="premium-hover" style={{ display: 'block', position: 'relative', borderRadius: '30px', overflow: 'hidden', height: '400px' }}>
            <img 
              src={backwaterPath} 
              alt="Kerala Backwaters" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1544735745-b44583b48873?auto=format&fit=crop&q=80&w=2000'; }}
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-end', 
              padding: '40px' 
            }}>
              <h3 className="serif" style={{ fontSize: '32px', color: 'white' }}>Kerala Backwaters</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>Slow down to the rhythm of the tides in tranquil canals.</p>
            </div>
          </Link>
        </ScrollReveal>

        <ScrollReveal className="reveal-right">
          <Link to="/journey/heritage-trails" className="premium-hover" style={{ display: 'block', position: 'relative', borderRadius: '30px', overflow: 'hidden', height: '400px' }}>
            <img 
              src={heritagePath} 
              alt="Heritage Trails" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.4) 100%)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-end', 
              padding: '40px' 
            }}>
              <h3 className="serif" style={{ fontSize: '32px', color: 'white' }}>Heritage Trails</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>Discover the ancient architectural wonders and sacred sites.</p>
            </div>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Journeys;
