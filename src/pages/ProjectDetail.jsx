import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import carbonOffsetImage from '../assets/john-fornander-y3_AHHrxUBY-unsplash.jpg';
import reefImage from '../assets/eneko-urunuela-I2YSmEUAgDY-unsplash.jpg';
import educationImage from '../assets/anil-jose-xavier-Tp-kViKErbw-unsplash.jpg';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: "carbon-neutral",
      title: "ECO-WATER CONSERVATION",
      tag: "ENVIRONMENT",
      image: carbonOffsetImage,
      desc: "Implementing sustainable water management solutions across Kerala's backwaters.",
      longDesc: "The Eco-Water Conservation project is our flagship environmental initiative. We focus on preserving the purity of Kerala's vast backwater networks by implementing advanced waste management systems in traditional houseboats and funding the restoration of natural filter beds. Our goal is to ensure that the 'Venice of the East' remains a pristine sanctuary for generations to come.",
      goals: [
        "Elimination of single-use plastics across all water-based journeys.",
        "Installation of high-efficiency water filtration systems in 100+ houseboats.",
        "Restoration of 500+ acres of natural mangrove filtration systems."
      ]
    },
    {
      id: "reef-restoration",
      title: "HERITAGE GALLERY & RESTORATION",
      tag: "CULTURE",
      image: reefImage,
      desc: "Showcasing and restoring the craft and art of Kerala's ancient temples and homes.",
      longDesc: "The Heritage Gallery & Restoration project is a dedicated effort to protect Kerala's architectural soul. We partner with master craftsmen to restore ancestral 'Tharavadus' and temple murals using traditional, sustainable materials. Our mobile gallery brings these stories to the world, ensuring that the legacy of Kerala's artisans is recognized and preserved.",
      goals: [
        "Restoration of 50+ historic heritage sites across the Malabar coast.",
        "Creation of a digital archive for endangered mural art forms.",
        "Direct financial support to 200+ traditional craftsmen and their families."
      ]
    },
    {
      id: "heritage-education",
      title: "SOCIAL CHANGE & EMPOWERMENT",
      tag: "COMMUNITY",
      image: educationImage,
      desc: "A vehicle for community empowerment and unlocking local potential.",
      longDesc: "Social Change is at the heart of our mission. This project focuses on creating sustainable livelihoods for rural communities through tourism. By providing vocational training, healthcare access, and business mentorship, we empower local villagers to become the guardians of their own heritage and landscapes.",
      goals: [
        "Establishment of 10 community-led tourism cooperatives.",
        "Provision of healthcare and education scholarships for artisan children.",
        "Creation of 1000+ sustainable local jobs in the luxury travel sector."
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="page-transition">
        <Navbar />
        <section className="section container" style={{ paddingTop: '200px', textAlign: 'center' }}>
          <h1 className="serif">Project Not Found</h1>
          <button className="btn-explore" onClick={() => navigate('/projects')} style={{ marginTop: '40px' }}>BACK TO PROJECTS</button>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail page-transition">
      <Navbar />
      
      <header className="hero" style={{ height: '70vh', position: 'relative' }}>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary), transparent)' }}></div>
        <div className="container" style={{ position: 'absolute', bottom: '60px', left: '0', right: '0' }}>
          <ScrollReveal>
            <span className="section-tag" style={{ background: 'var(--accent-gold)', color: 'black' }}>{project.tag}</span>
            <h1 className="serif" style={{ fontSize: '64px', marginTop: '20px' }}>{project.title}</h1>
          </ScrollReveal>
        </div>
      </header>

      <section className="section container">
        <div className="responsive-grid" style={{ gap: '80px', alignItems: 'start' }}>
          <ScrollReveal className="reveal-left">
            <h2 className="serif" style={{ fontSize: '32px', color: 'var(--accent-gold)', marginBottom: '30px' }}>The Vision</h2>
            <p style={{ fontSize: '20px', color: 'var(--text-primary)', lineHeight: '1.7', marginBottom: '40px' }}>
              {project.longDesc}
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '60px' }}>
              <div>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>STATUS</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Ongoing Initiative</p>
              </div>
              <div>
                <h4 style={{ color: 'var(--accent-gold)', fontSize: '12px', letterSpacing: '2px', marginBottom: '10px' }}>LOCATION</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Pan-Kerala</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="reveal-right">
            <div className="glass" style={{ padding: '50px', borderRadius: '32px', border: '1px solid var(--accent-gold)' }}>
              <h3 className="serif" style={{ fontSize: '28px', marginBottom: '20px' }}>Impact Goals</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
                {project.goals.map((goal, i) => (
                  <li key={i} style={{ display: 'flex', gap: '15px' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>•</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{goal}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-explore" onClick={() => navigate('/projects')} style={{ width: '100%', marginTop: '40px' }}>ALL PROJECTS</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
