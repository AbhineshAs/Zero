import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import ScrollReveal from '../components/ScrollReveal';
import FloatingOrbs from '../components/FloatingOrbs';
import ecoWaterImg from '../assets/nathan-dumlao-kDxqbAvEBwI-unsplash.jpg';
import heritageImg from '../assets/anantha-krishnan-SQ8igqgfYps-unsplash.jpg';
import socialChangeImg from '../assets/anuranj-mp-4JPav-oj83s-unsplash.jpg';

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: "carbon-neutral",
      title: "Eco-Water Conservation",
      tag: "ENVIRONMENTAL",
      image: ecoWaterImg,
      desc: "Implementing sustainable water management solutions across Kerala's backwaters."
    },
    {
      id: "reef-restoration",
      title: "Heritage Gallery",
      tag: "CULTURAL",
      image: heritageImg,
      desc: "Showcasing and restoring the craft and art of Kerala's ancient temples and homes."
    },
    {
      id: "heritage-education",
      title: "Social Change",
      tag: "COMMUNITY",
      image: socialChangeImg,
      desc: "A vehicle for community empowerment and unlocking local potential."
    }
  ];


  return (
    <div className="projects page-transition">
      <Navbar />

      <header className="hero" style={{ height: '80vh', background: 'var(--bg-secondary)', textAlign: 'center' }}>
        <div className="container">
          <div className="hero-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <ScrollReveal threshold={0}>
              <div className="section-header centered">
                <span className="section-tag">LEGACY & IMPACT</span>
                <h1 className="hero-title serif" style={{ fontSize: '80px', lineHeight: '1.1' }}>Architects of <br /> Meaningful Exploration</h1>
              </div>
            </ScrollReveal>
            <ScrollReveal delay="delay-2" threshold={0}>
              <p className="hero-subtitle" style={{ fontSize: '18px', maxWidth: '600px', margin: '30px auto 0' }}>
                At Zyro Trips, we believe that luxury is not just an experience, but a responsibility. Our flagship projects represent our commitment to preserving heritage and fostering sustainable futures across Kerala's most fragile landscapes.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </header>

      <section className="section container">
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={`delay-${i + 1}`}>
              <div className="project-card premium-hover glass" style={{ borderRadius: '24px', overflow: 'hidden', height: '100%' }}>
                <div className="img-container" style={{ height: '450px', position: 'relative' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'flex-end', padding: '40px' }}>
                    <div>
                      <span className="section-tag" style={{ fontSize: '10px', padding: '2px 8px' }}>{project.tag}</span>
                      <h3 className="serif" style={{ fontSize: '28px', color: 'white', marginTop: '10px' }}>{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '40px' }}>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '15px', lineHeight: '1.7' }}>{project.desc}</p>
                  <button className="btn-explore" onClick={() => navigate(`/project/${project.id}`)} style={{ width: '100%' }}>DISCOVER THE LEGACY</button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}>
        <FloatingOrbs />
        <ScrollReveal className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
            <div className="centered" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', color: 'var(--accent-gold)', fontWeight: '700' }}>
                <Counter end={150} suffix="+" />
              </div>
              <p style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>HERITAGE SITES RESTORED</p>
            </div>
            <div className="centered" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', color: 'var(--accent-gold)', fontWeight: '700' }}>
                <Counter end={90} suffix="%" />
              </div>
              <p style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>CARBON OFFSET ACHIEVED</p>
            </div>
            <div className="centered" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '64px', color: 'var(--accent-gold)', fontWeight: '700' }}>
                <Counter end={40} prefix="₹" suffix="Cr+" />
              </div>
              <p style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>LOCAL IMPACT INVESTMENTS</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="section" style={{ textAlign: 'center', background: 'var(--bg-secondary)' }}>
        <ScrollReveal className="container">
          <h2 className="serif" style={{ fontSize: '72px', marginBottom: '40px' }}>Shape the <br /> Next Chapter</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 40px' }}>
            Every journey with Zyro Trips contributes to these ongoing narratives. Join our circle of elite travelers and become a patron of global preservation.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="btn-explore" onClick={() => navigate('/membership')} style={{ padding: '20px 60px' }}>APPLY FOR MEMBERSHIP</button>
            <button className="btn-explore" onClick={() => navigate('/impact-report')} style={{ background: 'transparent', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', padding: '20px 60px' }}>REQUEST IMPACT REPORT</button>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
