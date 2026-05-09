import ScrollReveal from './ScrollReveal';

const Mastery = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', padding: '120px 0' }}>
      <div className="container">
        <div className="responsive-grid" style={{ alignItems: 'center', gap: '100px' }}>
          <ScrollReveal className="reveal-left" style={{ flex: 1.2 }}>
            <span className="section-tag">Our Leadership</span>
            <h2 className="serif" style={{ fontSize: '56px', marginBottom: '40px' }}>ARCHITECTS OF EXPERIENCE</h2>
            <div style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '30px' }}>
                Zyro Trips was founded on a singular premise: that the most profound journeys are those that connect us to the heart of a culture. Our founders, Gokul BS and Rajesh, bring decades of combined expertise in hospitality, heritage conservation, and luxury travel.
              </p>
              <p style={{ marginBottom: '30px' }}>
                With a deep understanding of Kerala's complex history and vibrant traditions, they have curated a team of specialists—from historians and naturalists to concierge managers—who share a common goal: to deliver excellence without compromise.
              </p>
              <p>
                Every journey we architect is a testament to this mastery, ensuring that our guests don't just visit Kerala, but become part of its living story.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right" style={{ flex: 1 }}>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                width: '100%', 
                height: '600px', 
                borderRadius: '40px', 
                overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(0,0,0,0.6)'
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Founder" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div className="glass" style={{ 
                position: 'absolute', 
                bottom: '-30px', 
                right: '-30px', 
                padding: '40px', 
                borderRadius: '24px',
                maxWidth: '300px'
              }}>
                <h4 className="serif" style={{ color: 'var(--accent-gold)', fontSize: '24px', marginBottom: '10px' }}>GOKUL BS</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', letterSpacing: '2px', textTransform: 'uppercase' }}>CHIEF ARCHITECT OF EXPERIENCE</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Mastery;
