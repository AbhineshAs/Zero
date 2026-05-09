import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const BookNow = () => {
  const [formData, setFormData] = useState({
    destination: '',
    transportType: 'Luxury SUV',
    passengers: '2',
    days: '3',
    startDate: '',
    requests: ''
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
    <div className="book-now-page page-transition">
      <Navbar />

      <section className="section" style={{ paddingTop: '160px', background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="responsive-grid" style={{ gap: '80px' }}>
            <ScrollReveal className="reveal-left">
              <div className="section-header">
                <span className="section-tag">Bespoke Enquiry</span>
                <h1 className="serif" style={{ fontSize: '64px', marginBottom: '30px' }}>Begin Your <br /> Journey</h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '500px', lineHeight: '1.6' }}>
                  Complete our digital concierge form to begin the curation of your personalized Kerala experience. Our lifestyle managers will respond with a tailored itinerary within 2 hours.
                </p>

                <div style={{ marginTop: '60px', display: 'grid', gap: '30px' }}>
                  <div>
                    <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>24/7 CONCIERGE</h4>
                    <p style={{ color: 'var(--text-primary)' }}>+91 80782 78254</p>
                    <p style={{ color: 'var(--text-primary)', marginTop: '5px' }}>+91 80758 36367</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>EMAIL ENQUIRIES</h4>
                    <p style={{ color: 'var(--text-primary)' }}>zyrotrips@gmail.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="reveal-right">
              <div className="glass premium-hover" style={{ padding: '60px', borderRadius: '32px', border: '1px solid var(--accent-gold)' }}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-grid">
                      <div className="form-group">
                        <label>DESTINATION</label>
                        <input
                          type="text"
                          placeholder="e.g. Munnar, Alleppey"
                          required
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>TRANSPORT MODE</label>
                        <select
                          value={formData.transportType}
                          onChange={(e) => setFormData({ ...formData, transportType: e.target.value })}
                        >
                          <option>Luxury Sedan (BMW/Audi)</option>
                          <option>Luxury SUV (Fortuner/Endeavour)</option>
                          <option>Premium Traveller (12-Seater)</option>
                          <option>Urban Coach (Bus)</option>
                          <option>Private Houseboat</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>NO. OF GUESTS</label>
                        <input
                          type="number"
                          min="1"
                          required
                          value={formData.passengers}
                          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>DURATION (DAYS)</label>
                        <input
                          type="number"
                          min="1"
                          required
                          value={formData.days}
                          onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>START DATE</label>
                        <input
                          type="date"
                          required
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginTop: '30px' }}>
                      <label>SPECIAL REQUESTS</label>
                      <textarea
                        placeholder="Tell us about your vision..."
                        rows="4"
                        value={formData.requests}
                        onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-explore" style={{ width: '100%', marginTop: '40px', padding: '20px' }}>
                      SEND BOOKING REQUEST
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center', padding: '60px 0' }}>
                    <div style={{ fontSize: '80px', color: 'var(--accent-gold)', marginBottom: '30px' }}>✓</div>
                    <h2 className="serif" style={{ fontSize: '42px', marginBottom: '20px' }}>REQUEST RECEIVED</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>
                      Thank you for your trust in Zyro Trips. <br />
                      Our lead concierge is now reviewing your request.
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

export default BookNow;
