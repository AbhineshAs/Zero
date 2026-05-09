import ScrollReveal from './ScrollReveal';

const LuxuryDefined = () => {
  return (
    <section className="section" style={{ background: '#050505', padding: '150px 0' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header centered" style={{ marginBottom: '100px' }}>
            <span className="section-tag">Our Perspective</span>
            <h2 className="serif" style={{ fontSize: '56px' }}>LUXURY, REDEFINED</h2>
          </div>
        </ScrollReveal>

        <div className="luxury-pillars-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '40px' 
        }}>
          {[
            {
              title: "TIMELESSNESS",
              desc: "In a world of fast travel, we prioritize slow immersion. True luxury is having the time to connect with the soul of a destination."
            },
            {
              title: "EXCLUSIVITY",
              desc: "Beyond high-end resorts, we provide access to private heritage sites, hidden temples, and secluded natural wonders unseen by the public."
            },
            {
              title: "PRECISION",
              desc: "From the thread count of your linens to the specific vintage of your wine, we engineer every detail to match your exact standard."
            },
            {
              title: "CONNECTION",
              desc: "We believe the ultimate luxury is a deep, meaningful connection with the people, history, and landscapes of Kerala."
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={`delay-${(i % 4) + 1}`}>
              <div style={{ borderLeft: '1px solid rgba(212, 175, 55, 0.3)', paddingLeft: '40px' }}>
                <h3 className="serif" style={{ color: 'var(--accent-gold)', fontSize: '28px', marginBottom: '20px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryDefined;
