import ScrollReveal from './ScrollReveal';
import FloatingOrbs from './FloatingOrbs';
import { Link } from 'react-router-dom';

const Commitment = () => {
  const cards = [
    {
      title: "PERSONALIZED TOURS",
      description: "A dedicated specialist team prepares all our tours personally just for you for each journey.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      title: "EXPERT GUIDANCE",
      description: "Experience some best-kept secrets with professional expertise and local insights.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      )
    },
    {
      title: "EXCLUSIVE ACCESS",
      description: "Only way you can choose lifestyle of India's most grandest destinations.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section className="section container" style={{ position: 'relative', overflow: 'hidden' }}>
      <FloatingOrbs />
      <ScrollReveal>
        <div className="section-header centered">
          <span className="section-tag">Our Commitment</span>
          <h2 className="serif" style={{ fontSize: '48px' }}>THE HERITAGE & HORIZON PROMISE</h2>
        </div>
      </ScrollReveal>
      
      <div className="commitment-grid">
        {cards.map((card, index) => (
          <ScrollReveal key={index} delay={`delay-${index + 1}`}>
            <Link to="/what-we-do" className="commitment-card premium-hover" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title serif">{card.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>{card.description}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};


export default Commitment;
