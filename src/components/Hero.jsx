import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/anantha-krishnan-zMfvtg7jfuc-unsplash.jpg';
import ScrollReveal from './ScrollReveal';
import FloatingOrbs from './FloatingOrbs';


const Hero = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/journeys');
  };

  const handleBookNow = () => {
    navigate('/book-now');
  };

  return (
    <section className="hero">
      <img
        src={heroImage}
        alt="Kerala Backwaters"
        className="hero-bg"
        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1593693397690-362af9666fc2?auto=format&fit=crop&q=80&w=2000'; }}
      />
      <FloatingOrbs />
      <div className="hero-content">
        <ScrollReveal threshold={0}>
          <h1 className="hero-title serif">
            THE SOUL OF <span className="text-gold-gradient">KERALA, REDEFINED.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay="delay-1" threshold={0}>
          <p className="hero-subtitle">
            Experience the ultimate lifestyle through the hospitality and we invite you to explore the unique heritage of Kerala.
          </p>
        </ScrollReveal>

        <ScrollReveal delay="delay-2" threshold={0}>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '40px' }}>
            <button className="btn-explore" onClick={handleBookNow} style={{ padding: '20px 50px' }}>BOOK NOW</button>
            <button className="btn-explore" onClick={handleExplore} style={{
              background: 'transparent',
              border: '0px solid var(--accent-gold)',
              color: 'var(--accent-gold)',
              padding: '20px 50px'
            }}>EXPLORE</button>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
};

export default Hero;
