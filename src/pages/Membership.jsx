import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Membership = () => {
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
    <div className="membership-page page-transition">
      <Navbar />
      
      <section className="section" style={{ paddingTop: '160px', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <ScrollReveal>
            <div className="section-header">
              <span className="section-tag">Exclusive Circle</span>
              <h1 className="serif" style={{ fontSize: '64px', marginBottom: '30px' }}>Apply For <br /> Membership</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.6', marginBottom: '60px' }}>
                Join an elite group of patrons dedicated to heritage preservation and high-fidelity exploration. Membership is by invitation or application only.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass" style={{ padding: '60px', borderRadius: '32px', border: '1px solid var(--accent-gold)', textAlign: 'left' }}>
              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    <div>
                      <label style={{ fontSize: '12px', color: 'var(--accent-gold)', letterSpacing: '2px' }}>FULL NAME</label>
                      <input type="text" required style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'white', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '12px', color: 'var(--accent-gold)', letterSpacing: '2px' }}>EMAIL ADDRESS</label>
                      <input type="email" required style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'white', outline: 'none' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--accent-gold)', letterSpacing: '2px' }}>PROFESSION / AFFILIATION</label>
                    <input type="text" style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'white', outline: 'none' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--accent-gold)', letterSpacing: '2px' }}>WHY JOIN ZYRO CIRCLE?</label>
                    <textarea rows="4" style={{ width: '100%', padding: '15px 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'white', outline: 'none', resize: 'none' }}></textarea>
                  </div>

                  <button type="submit" className="btn-explore" style={{ width: '100%', marginTop: '20px', padding: '20px' }}>SUBMIT APPLICATION</button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '80px', color: 'var(--accent-gold)', marginBottom: '30px' }}>✓</div>
                  <h2 className="serif" style={{ fontSize: '36px', marginBottom: '20px' }}>APPLICATION RECEIVED</h2>
                  <p style={{ color: 'var(--text-secondary)' }}>Our membership committee will review your profile and contact you within 48 hours.</p>
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

export default Membership;
