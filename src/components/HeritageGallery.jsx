import wayanadImg from '../assets/pexels-harsh-chikhalia-2194776-3848200.jpg';
import goldenSandsImg from '../assets/pexels-shalenderkumar-6652178.jpg';
import silentWatersImg from '../assets/jacob-antony-1B3wiVIRqEM-unsplash.jpg';
import munnarImg from '../assets/pexels-mac-avoy-283675445-13045091.jpg';
import ScrollReveal from './ScrollReveal';

const HeritageGallery = () => {
  const images = [
    {
      url: silentWatersImg,
      title: "Silent Waters",
      tag: "Backwaters"
    },
    {
      url: munnarImg,
      title: "Emerald Slopes",
      tag: "Munnar"
    },
    {
      url: goldenSandsImg,
      title: "Golden Sands",
      tag: "Coastal Kerala"
    },
    {
      url: wayanadImg,
      title: "Mist & Tea",
      tag: "Wayanad"
    }
  ];

  return (
    <section className="section" style={{ background: '#0a0a0a', padding: '100px 0' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header centered" style={{ marginBottom: '80px' }}>
            <span className="section-tag">Visual Story</span>
            <h2 className="serif" style={{ fontSize: '48px' }}>HERITAGE IN FRAME</h2>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px' 
        }}>
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={`delay-${(i % 4) + 1}`} className="premium-hover">
              <div style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden' }}>
                <img src={img.url} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  inset: 0, 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'flex-end', 
                  padding: '20px' 
                }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>{img.tag}</span>
                  <h3 className="serif" style={{ fontSize: '20px', color: 'white' }}>{img.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeritageGallery;
