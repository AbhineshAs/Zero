import { Link, useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import logo from '../assets/c4d1d8f0-86e6-4297-b4db-df3e0cfc3965.png';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="contact" className="footer section">
      {/* SVG Filter to remove white/gray background */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="remove-bg-footer" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            -3 -3 -3 8 0
          " />
        </filter>
      </svg>

      <ScrollReveal className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src={logo}
              alt="ZYRO TRIPS"
              style={{
                height: '35px',
                width: 'auto',
                marginBottom: '15px',
                filter: 'url(#remove-bg-footer) brightness(1.1)',
                mixBlendMode: 'screen'
              }}
            />
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', fontSize: '11px', lineHeight: '1.6' }}>
              Defining the future of luxury travel through precision heritage and sustainable innovation.
            </p>
          </div>

          <div>
            <h3 className="footer-title">THE COLLECTION</h3>
            <ul className="footer-links">
              <li><Link to="/journey/misty-peaks">Misty Peaks</Link></li>
              <li><Link to="/journey/backwater-solitude">Backwater Solitude</Link></li>
              <li><Link to="/journey/heritage-trails">Heritage Trails</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">NAVIGATION</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/who-we-are">Who We Are</Link></li>
              <li><Link to="/what-we-do">What We Do</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">SUSTAINABILITY</h3>
            <ul className="footer-links">
              <li><a href="#">Eco-Conservation</a></li>
              <li><a href="#">Heritage Preservation</a></li>
              <li><a href="#">Community Impact</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>&copy; 2026 ZYRO TRIPS GLOBAL. ALL RIGHTS RESERVED.</p>
          <div className="social-links" style={{ display: 'flex', gap: '20px', fontSize: '11px' }}>
            <a href="https://www.instagram.com/zyro_trips_?igsh=eXh6Y3FveGI1cmk=" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>IG</a>
            <a href="#" style={{ color: 'var(--text-secondary)' }}>LI</a>
            <a href="#" style={{ color: 'var(--text-secondary)' }}>TW</a>
          </div>
        </div>
      </ScrollReveal>

    </footer>
  );
};

export default Footer;
