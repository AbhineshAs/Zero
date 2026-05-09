import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import FloatingOrbs from '../components/FloatingOrbs';
import { useNavigate } from 'react-router-dom';
import whoWeAreBg from '../assets/mitchell-ng-liang-an-j5YwVDEC394-unsplash.jpg';

const WhoWeAre = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heritagePath = whoWeAreBg;

  const team = [
    {
      name: "Rajesh",
      role: "Founder",
    },
    {
      name: "Gokul Bs",
      role: "Co-Founder",
    }
  ];

  return (
    <div className="who-we-are page-transition">
      <Navbar />

      <header className="hero" style={{ height: '80vh', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs />
        <img src={heritagePath} className="hero-bg" alt="Heritage" style={{ filter: 'brightness(0.4)' }} />
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <ScrollReveal threshold={0}>
              <div className="section-header centered">
                <span className="section-tag">Who We Are</span>
                <h1 className="hero-title serif" style={{ fontSize: '80px', marginBottom: '30px' }}>ZYRO TRIPS</h1>
              </div>
            </ScrollReveal>
            <ScrollReveal delay="delay-2" threshold={0}>
              <p className="hero-subtitle" style={{ fontSize: '18px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                Building the next generation of lifestyle experiences. We are a team dedicated to discovering and sharing the ultimate lifestyle and travel experiences of Kerala.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      <section className="section container">
        <div className="responsive-grid">
          <ScrollReveal className="reveal-right">
            <div className="section-header">
              <h2 className="serif" style={{ fontSize: '48px', marginBottom: '30px' }}>Our Heritage</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '18px' }}>
              Born in the heart of Kerala, Zyro Trips was founded with a simple yet powerful vision: to redefine how the world experiences the unique heritage and natural beauty of our land.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
              Our foundation is built on years of hospitality expertise and a deep-rooted passion for Kerala's culture. We believe in authenticity, excellence, and the art of storytelling through travel.
            </p>
            <blockquote style={{ borderLeft: '4px solid var(--accent-gold)', paddingLeft: '20px', fontStyle: 'italic', color: 'var(--text-primary)', fontSize: '20px', textAlign: 'left', maxWidth: '600px' }}>
              "Travel is not just about destinations, but a deep connection with the heritage that surrounds us."
            </blockquote>
          </ScrollReveal>
          <ScrollReveal className="reveal-left">
            <div className="premium-hover" style={{
              width: '100%',
              height: '300px',
              backgroundImage: 'url(https://images.unsplash.com/photo-1620619767323-b95a89183081?auto=format&fit=crop&q=80&w=1000)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>
              <h2 className="logo" style={{ fontSize: '48px', position: 'relative', zIndex: 1, letterSpacing: '8px' }}>ZYRO</h2>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="section-tag">Principles</span>
              <h2 className="serif" style={{ fontSize: '48px' }}>The Philosophy</h2>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { num: "01", title: "EMPATHY", text: "We prioritize understanding the needs and desires of our guests, ensuring every journey is tailored to their personal preferences." },
              { num: "02", title: "CRAFTSMANSHIP", text: "Our itineraries are meticulously crafted with attention to detail, combining luxury with local authenticity." },
              { num: "03", title: "SUSTAINABILITY", text: "We are committed to preserving the natural beauty and cultural heritage of Kerala for generations to come." }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={`delay-${i + 1}`}>
                <div className="glass premium-hover" style={{ padding: '40px', border: '1px solid rgba(212, 175, 55, 0.2)', height: '100%' }}>
                  <div style={{ fontSize: '60px', color: 'rgba(212, 175, 55, 0.1)', fontWeight: '700', marginBottom: '-30px' }}>{item.num}</div>
                  <h3 className="serif" style={{ color: 'var(--accent-gold)', marginBottom: '20px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <ScrollReveal>
          <div className="section-header centered">
            <span className="section-tag">Team</span>
            <h2 className="serif" style={{ fontSize: '48px' }}>The Concierge Elite</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '20px auto 0' }}>
              The architects of your bespoke journeys, combining local expertise with global standards.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '120px', marginTop: '60px', flexWrap: 'wrap' }}>
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={`delay-${i + 1}`}>
              <div style={{ textAlign: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '30px', minWidth: '250px' }}>
                <h3 className="serif" style={{ fontSize: '32px', color: 'var(--accent-gold)', marginBottom: '10px' }}>{member.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '3px' }}>{member.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section container">
        <ScrollReveal className="glass premium-hover" style={{ padding: '80px 40px', textAlign: 'center', borderRadius: '32px' }}>
          <h2 className="serif" style={{ fontSize: '48px', marginBottom: '30px' }}>Your journey is <br /> waiting to be written.</h2>
          <button className="btn-explore" onClick={() => navigate('/consultation')} style={{ padding: '20px 60px' }}>CONSULT OUR EXPERTS</button>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;
