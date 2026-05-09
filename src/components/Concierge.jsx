import ScrollReveal from './ScrollReveal';

const Concierge = () => {
  return (
    <section className="section" style={{ background: 'var(--bg-primary)', padding: '120px 0' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header centered" style={{ marginBottom: '80px' }}>
            <span className="section-tag">Unparalleled Service</span>
            <h2 className="serif" style={{ fontSize: '48px' }}>24/7 LIFESTYLE MANAGEMENT</h2>
          </div>
        </ScrollReveal>

        <div className="responsive-grid" style={{ gap: '40px' }}>
          {[
            {
              title: "TRAVEL PLANNING",
              desc: "Bespoke itineraries crafted by experts who know every corner of Kerala.",
              icon: "✈️"
            },
            {
              title: "PRIVATE ACCESS",
              desc: "Exclusive reservations at the most sought-after heritage sites and resorts.",
              icon: "🔑"
            },
            {
              title: "EVENT CURATION",
              desc: "From intimate celebrations to grand heritage-themed events.",
              icon: "✨"
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={`delay-${i + 1}`}>
              <div className="premium-hover glass" style={{ padding: '50px', borderRadius: '32px', textAlign: 'center', height: '100%' }}>
                <div style={{ fontSize: '48px', marginBottom: '30px' }}>{item.icon}</div>
                <h3 className="serif" style={{ color: 'var(--accent-gold)', fontSize: '24px', marginBottom: '20px' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concierge;
