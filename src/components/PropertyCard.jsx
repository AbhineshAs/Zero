import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const PropertyCard = ({ title, price, image, badge, address, delay = "" }) => {
  return (
    <ScrollReveal delay={delay}>
      <div className="property-card premium-hover">
        <img 
          src={image} 
          alt={title} 
          className="property-img" 
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000'; }}
        />
        <div className="property-overlay">
          {badge && <span className="property-badge">{badge}</span>}
          <h3 className="property-title serif">{title}</h3>
          {address && <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px', marginBottom: '10px', textTransform: 'uppercase' }}>{address}</p>}
          <p className="property-price">From ₹ {price}</p>
          <Link to="/explore" className="btn-explore" style={{ padding: '12px 40px', fontSize: '12px', textDecoration: 'none' }}>
            EXPLORE
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default PropertyCard;

