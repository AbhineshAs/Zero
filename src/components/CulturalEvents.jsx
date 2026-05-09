import React from 'react';
import ScrollReveal from './ScrollReveal';
import culturalImg from '../assets/anantha-krishnan-SQ8igqgfYps-unsplash.jpg';

const CulturalEvents = () => {
  return (
    <section className="section container" style={{ padding: '120px 0' }}>
      <div className="responsive-grid" style={{ alignItems: 'center' }}>
        <ScrollReveal className="reveal-left">
          <div className="img-container premium-hover" style={{ borderRadius: '32px', height: '600px', overflow: 'hidden' }}>
            <img 
              src={culturalImg} 
              alt="Kerala Cultural Event" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </ScrollReveal>

        <ScrollReveal className="reveal-right">
          <div style={{ padding: '0 40px' }}>
            <span className="section-tag">Living Traditions</span>
            <h2 className="serif" style={{ fontSize: '56px', marginBottom: '30px' }}>THE PULSE OF HERITAGE</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px' }}>
              From the rhythmic beats of Chenda Melam to the ethereal grace of Mohiniyattam, Kerala's cultural events are more than performances—they are sacred dialogues between the past and the present. We offer exclusive access to private temple festivals, shadow puppetry, and the vibrant colors of Theyyam.
            </p>
            
            <blockquote style={{ 
              borderLeft: '4px solid var(--accent-gold)', 
              paddingLeft: '30px', 
              fontStyle: 'italic', 
              color: 'var(--text-primary)', 
              fontSize: '24px', 
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '500px'
            }}>
              "Kerala's culture is a symphony of colors, rhythms, and ancient traditions that transcend time."
            </blockquote>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <div style={{ width: '50px', height: '1px', background: 'var(--accent-gold)' }}></div>
              <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent-gold)', fontWeight: '600' }}>Experience the Divine</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CulturalEvents;
