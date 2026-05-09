import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const ImpactReport = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      window.location.href = '/';
    }, 3000);
  };

  return (
    <div className="impact-report-page page-transition">
      <Navbar />
      
      <section className="section" style={{ paddingTop: '160px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Transparency</span>
              <h1 className="serif" style={{ fontSize: '64px', marginBottom: '30px' }}>2025 Impact <br /> Report</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '60px' }}>
                Download our comprehensive report on sustainability, heritage preservation, and community empowerment initiatives.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass" style={{ padding: '60px', borderRadius: '32px', border: '1px solid var(--accent-gold)', textAlign: 'left' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--accent-gold)', letterSpacing: '2px' }}>FULL NAME</label>
                    <input type="text" required style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'white', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--accent-gold)', letterSpacing: '2px' }}>EMAIL ADDRESS</label>
                    <input type="email" required style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'white', outline: 'none' }} />
                  </div>

                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    By requesting this report, you agree to receive occasional updates on our sustainability journey. You can unsubscribe at any time.
                  </p>

                  <button type="submit" className="btn-explore" style={{ width: '100%', padding: '20px' }}>ACCESS REPORT (PDF)</button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '80px', color: 'var(--accent-gold)', marginBottom: '30px' }}>✓</div>
                  <h2 className="serif" style={{ fontSize: '36px', marginBottom: '20px' }}>LINK SENT</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>A download link for the 2025 Impact Report has been sent to your email address.</p>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ImpactReport;
