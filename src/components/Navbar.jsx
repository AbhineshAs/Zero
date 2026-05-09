import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/c4d1d8f0-86e6-4297-b4db-df3e0cfc3965.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="remove-bg" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            -3 -3 -3 8 0
          " />
        </filter>
      </svg>

      <div className="container">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={logo}
            alt="ZYRO TRIPS"
            style={{
              height: '50px',
              width: 'auto',
              filter: 'url(#remove-bg) brightness(1.1)',
              mixBlendMode: 'screen'
            }}
          />
        </Link>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>

          <Link to="/who-we-are" className="nav-item" onClick={() => setMenuOpen(false)}>Who we are</Link>
          <Link to="/what-we-do" className="nav-item" onClick={() => setMenuOpen(false)}>What we do</Link>
          <Link to="/journeys" className="nav-item" onClick={() => setMenuOpen(false)}>Journeys</Link>
          <Link to="/projects" className="nav-item" onClick={() => setMenuOpen(false)}>Projects</Link>
        </div>

        <div className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
