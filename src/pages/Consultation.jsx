import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    interest: 'Heritage Travel',
    time: 'Morning',
    message: ''
  });

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
    <div className="consultation-page page-transition">
      <Navbar />

      <section className="section" style={{ paddingTop: '160px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ gap: '80px' }}>
            <ScrollReveal className="reveal-left">
              <div className="section-header">
                <span className="section-tag">Expert Dialogue</span>
                <h1 className="serif" style={{ fontSize: '64px', marginBottom: '30px' }}>Consult Our <br /> Experts</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '500px', lineHeight: '1.6' }}>
                  Schedule a private dialogue with our lead concierge. Whether you're seeking rare cultural insights or hyper-personalized logistics, our experts are here to architect your vision.
                </p>

                <div style={{ marginTop: '60px', display: 'grid', gap: '30px' }}>
                  <div className="premium-hover glass" style={{ padding: '30px', borderRadius: '24px' }}>
                    <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>PRIVATE CONCIERGE</h4>
                    <p style={{ color: 'var(--text-primary)', fontSize: '20px' }}>lead.expert@zyrotrips.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal-right">
              <div className="glass" style={{ padding: '60px', borderRadius: '32px', border: '1px solid var(--accent-gold)' }}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-grid">
                      <div className="form-group">
                        <label>FULL NAME</label>
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>CONTACT INFO (EMAIL/PHONE)</label>
                        <input
                          type="text"
                          placeholder="How can we reach you?"
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>PRIMARY INTEREST</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        >
                          <option>Heritage & Culture</option>
                          <option>Luxury Wellness</option>
                          <option>Private Backwaters</option>
                          <option>Nature & Wildlife</option>
                          <option>Bespoke Events</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>PREFERRED CONTACT TIME</label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        >
                          <option>Morning (9AM - 12PM)</option>
                          <option>Afternoon (12PM - 4PM)</option>
                          <option>Evening (4PM - 8PM)</option>
                          <option>ASAP</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '30px' }}>
                      <label>YOUR VISION</label>
                      <textarea
                        placeholder="Tell us more about the experience you seek..."
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-explore" style={{ width: '100%', marginTop: '40px', padding: '20px' }}>
                      REQUEST CONSULTATION
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <div style={{ fontSize: '80px', color: 'var(--accent-gold)', marginBottom: '30px' }}>✓</div>
                    <h2 className="serif" style={{ fontSize: '42px', marginBottom: '20px' }}>DIALOGUE REQUESTED</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
                      One of our lead experts will reach out during your preferred window to discuss your vision.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consultation;
