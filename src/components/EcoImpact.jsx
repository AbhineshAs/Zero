import ScrollReveal from './ScrollReveal';
import Counter from './Counter';

const EcoImpact = () => {
  return (
    <section className="section" style={{ background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div className="responsive-grid" style={{ alignItems: 'center', gap: '60px' }}>
          <ScrollReveal className="reveal-left">
            <span className="section-tag">Sustainable Future</span>
            <h2 className="serif" style={{ fontSize: '48px', marginBottom: '20px' }}>BEYOND LUXURY</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '40px' }}>
              We measure our success by the health of the heritage and landscapes we share. Every journey with Zyro Trips contributes to local preservation and eco-innovation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div className="glass" style={{ padding: '30px', borderRadius: '20px' }}>
                <div style={{ fontSize: '32px', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '10px' }}>
                  <Counter end={12} suffix="k+" />
                </div>
                <p style={{ fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Trees Planted</p>
              </div>
              <div className="glass" style={{ padding: '30px', borderRadius: '20px' }}>
                <div style={{ fontSize: '32px', color: 'var(--accent-gold)', fontWeight: '700', marginBottom: '10px' }}>
                  <Counter end={450} suffix="+" />
                </div>
                <p style={{ fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Artisans Supported</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', height: '500px' }}>
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Eco Preservation" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', backdropFilter: 'grayscale(0.5)' }}></div>
              <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px' }}>
                <div className="glass" style={{ padding: '30px', borderRadius: '20px' }}>
                  <p style={{ color: 'white', fontStyle: 'italic', fontSize: '16px' }}>
                    "Our goal is to leave Kerala more beautiful than we found it."
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default EcoImpact;
