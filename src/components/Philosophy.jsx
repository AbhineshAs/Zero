import ScrollReveal from './ScrollReveal';
import FloatingOrbs from './FloatingOrbs';

const Philosophy = () => {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', padding: '150px 0' }}>
      <FloatingOrbs />
      <div className="container">
        <div className="responsive-grid" style={{ alignItems: 'center', gap: '80px' }}>
          <ScrollReveal className="reveal-left">
            <div className="section-header">
              <span className="section-tag">Our Ethos</span>
              <h2 className="serif" style={{ fontSize: '56px', marginBottom: '30px' }}>THE ART OF DISCOVERY</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.8', marginBottom: '30px' }}>
              At Zyro Trips, we believe that true luxury is found in the connection between person and place. It's not just about the stay, but the stories that remain.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.8' }}>
              Our philosophy is rooted in "Keralite Excellence"—a commitment to preserving the heritage of our ancestors while embracing the horizons of the future. We don't just plan trips; we architect memories.
            </p>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div style={{ 
              padding: '60px', 
              background: 'rgba(255,255,255,0.02)', 
              backdropFilter: 'blur(20px)', 
              borderRadius: '32px', 
              border: '1px solid rgba(212, 175, 55, 0.2)',
              position: 'relative'
            }}>
              <div style={{ position: 'absolute', top: '-20px', left: '40px', background: 'var(--accent-gold)', color: 'var(--bg-primary)', padding: '5px 20px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
                FOUNDATION
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '30px' }}>
                  <h4 className="serif" style={{ color: 'var(--accent-gold)', fontSize: '22px', marginBottom: '10px' }}>AUTHENTICITY</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Real experiences, real people, real heritage.</p>
                </li>
                <li style={{ marginBottom: '30px' }}>
                  <h4 className="serif" style={{ color: 'var(--accent-gold)', fontSize: '22px', marginBottom: '10px' }}>EXCELLENCE</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Every detail precision-engineered for comfort.</p>
                </li>
                <li>
                  <h4 className="serif" style={{ color: 'var(--accent-gold)', fontSize: '22px', marginBottom: '10px' }}>PRESERVATION</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Sustaining the beauty of Kerala for tomorrow.</p>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
