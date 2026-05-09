import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import ScrollReveal from '../components/ScrollReveal';
import FloatingOrbs from '../components/FloatingOrbs';
import islandImage from '../assets/alessa-ciraulo-1HsiFH7oqBU-unsplash.jpg';
import lifestyleImage from '../assets/john-fornander-y3_AHHrxUBY-unsplash.jpg';

const WhatWeDo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jetPath = islandImage;
  const villaPath = lifestyleImage;

  return (
    <div className="what-we-do page-transition">
      <Navbar />

      <header className="hero" style={{ height: '80vh', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs />
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ScrollReveal threshold={0}>
              <div className="section-header centered">
                <span className="section-tag">Our Expertise</span>
                <h1 className="hero-title serif" style={{ fontSize: '90px', lineHeight: '1' }}>WHAT WE DO</h1>
              </div>
            </ScrollReveal>
            <ScrollReveal delay="delay-2" threshold={0}>
              <p className="hero-subtitle" style={{ fontSize: '20px', marginTop: '30px', color: 'var(--text-secondary)' }}>
                Zyro Trips is a private agency of lifestyle enthusiasts. We are dedicated to providing technical expertise with the refined taste of a global concierge.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      <section className="section container">
        <div className="responsive-grid">
          <ScrollReveal className="reveal-left" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="section-header centered">
              <span className="section-tag">Curated Travel</span>
              <h2 className="serif" style={{ fontSize: '60px', marginBottom: '30px', lineHeight: '1.1' }}>BESPOKE <br /> ITINERARIES</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '30px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Every journey is a blank canvas. Our travel architects craft hyper-personalized suites that align with your specific interests and leisure pursuits. From private vineyard access to untracked mountain trails, we ensure every moment is yours alone.
            </p>
            <button className="btn-explore btn-centered" onClick={() => navigate('/book-now')}>BOOK YOUR JOURNEY</button>
          </ScrollReveal>
          <ScrollReveal className="reveal-right" style={{ position: 'relative' }}>
            <div className="premium-hover" style={{
              padding: '40px',
              border: '1px solid var(--accent-gold)',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: 'url(https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&q=80&w=1000)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '24px'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }}></div>
              <h2 className="serif" style={{ fontSize: '120px', opacity: '0.1', position: 'absolute', zIndex: 1 }}>ZYRO</h2>
              <p style={{ fontSize: '24px', textAlign: 'center', color: 'var(--accent-gold)', position: 'relative', zIndex: 2 }}>HYPER-PERSONALIZED <br /> TRAVEL EXPERIENCES</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="responsive-grid" style={{ gap: '40px' }}>
            <ScrollReveal className="reveal-left">
              <div className="img-container premium-hover" style={{ height: '450px', borderRadius: '24px', marginBottom: '30px' }}>
                <img src={jetPath} alt="Private Island" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="section-tag">Islands</span>
              <h3 className="serif" style={{ fontSize: '32px', marginBottom: '20px' }}>PRIVATE ISLAND</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Escape to secluded crystalline waters and pristine sands. We curate exclusive access to private island retreats where luxury meets absolute solitude.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="img-container premium-hover" style={{ height: '450px', borderRadius: '24px', marginBottom: '30px' }}>
                <img src={villaPath} alt="Lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="section-tag">Lifestyle</span>
              <h3 className="serif" style={{ fontSize: '32px', marginBottom: '20px' }}>24/7 LIFESTYLE</h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                Beyond travel, we manage your world. From last-minute reservations to on-demand access, our lifestyle managers are your silent partners in excellence.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section container">
        <ScrollReveal className="glass premium-hover" style={{ padding: '80px 40px', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '32px', textAlign: 'center' }}>
          <div className="section-header centered">
            <span className="section-tag" style={{ background: 'var(--accent-gold)', color: 'black', padding: '4px 12px', display: 'inline-block' }}>A SPECIAL CURATION</span>
            <h2 className="serif" style={{ fontSize: '56px', marginTop: '30px', marginBottom: '30px' }}>HERITAGE & LEGACY</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '700px', marginBottom: '60px', lineHeight: '1.6', margin: '0 auto 60px' }}>
            We believe luxury should be enduring. Our programs support local conservation efforts in the sites we visit, ensuring that the beauty we enjoy remains for generations.
          </p>
          <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div>
              <div style={{ fontSize: '48px', color: 'var(--accent-gold)', fontWeight: '700' }}>
                <Counter end={15} suffix="%" />
              </div>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>ANNUAL <br /> CONTRIBUTION</p>
            </div>
            <div>
              <div style={{ fontSize: '48px', color: 'var(--accent-gold)', fontWeight: '700' }}>
                <Counter end={100} suffix="%" />
              </div>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>COMMUNITY <br /> FOCUSED</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <ScrollReveal className="container">
          <h2 className="serif" style={{ fontSize: '72px', marginBottom: '40px' }}>DESIGN YOUR <br /> ESCAPE</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>
            Connect with our lead concierge to discuss your upcoming travel requirements and receive a custom proposal.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="btn-explore" onClick={() => navigate('/consultation')} style={{ padding: '20px 60px' }}>CONSULT EXPERT</button>
            <button className="btn-explore" onClick={() => navigate('/journeys')} style={{ background: 'transparent', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', padding: '20px 60px' }}>VIEW COLLECTION</button>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
