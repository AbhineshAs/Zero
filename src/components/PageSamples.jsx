import { Link } from 'react-router-dom';
import Counter from './Counter';
import ScrollReveal from './ScrollReveal';
import whoWeAreBg from '../assets/mitchell-ng-liang-an-j5YwVDEC394-unsplash.jpg';
import islandImage from '../assets/alessa-ciraulo-1HsiFH7oqBU-unsplash.jpg';
import lifestyleImage from '../assets/john-fornander-y3_AHHrxUBY-unsplash.jpg';

const PageSamples = () => {
  return (
    <div className="page-samples">
      {/* Who We Are Teaser */}
      <section className="section container">
        <div className="responsive-grid">
          <ScrollReveal className="reveal-left" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="section-header centered">
              <span className="section-tag">Our Identity</span>
              <h2 className="serif" style={{ fontSize: '48px', marginBottom: '30px' }}>WHO WE ARE</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '18px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              Born in the heart of Kerala, Zyro Trips was founded by Gokul BS and Rajesh to redefine luxury travel. We are more than an agency; we are the guardians of heritage and architects of bespoke exploration.
            </p>
            <Link to="/who-we-are" className="btn-explore btn-centered" style={{ textDecoration: 'none' }}>OUR STORY</Link>
          </ScrollReveal>
          <ScrollReveal className="reveal-right">
            <div className="img-container premium-hover" style={{ borderRadius: '24px', height: '500px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
              <img src={whoWeAreBg} alt="Heritage Kerala" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do Teaser */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="section-tag">The Experience</span>
              <h2 className="serif" style={{ fontSize: '56px', marginBottom: '20px' }}>ARCHITECTING THE EXTRAORDINARY</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 60px', fontSize: '18px' }}>
                From private island sanctuaries to 24/7 bespoke management, we redefine the limits of luxury travel through precision and passion.
              </p>
            </div>
          </ScrollReveal>
          <div className="responsive-grid" style={{ gap: '40px' }}>
            <ScrollReveal className="reveal-left">
              <div className="glass premium-hover" style={{ padding: '40px', borderRadius: '24px', height: '100%' }}>
                <div className="img-container" style={{ height: '300px', borderRadius: '16px', marginBottom: '30px' }}>
                  <img src={islandImage} alt="Private Island" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 className="serif" style={{ fontSize: '28px', color: 'var(--accent-gold)', marginBottom: '15px' }}>PRIVATE ISLANDS</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Exclusive access to secluded retreats where absolute luxury meets the ultimate solitude of Kerala's coast.</p>
                <Link to="/what-we-do" style={{ color: 'var(--accent-gold)', textDecoration: 'none', letterSpacing: '1px', fontSize: '12px', fontWeight: '600' }}>DISCOVER MORE →</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="glass premium-hover" style={{ padding: '40px', borderRadius: '24px', height: '100%' }}>
                <div className="img-container" style={{ height: '300px', borderRadius: '16px', marginBottom: '30px' }}>
                  <img src={lifestyleImage} alt="Lifestyle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 className="serif" style={{ fontSize: '28px', color: 'var(--accent-gold)', marginBottom: '15px' }}>24/7 CONCIERGE</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>Your silent partners in excellence, managing your world with refined taste and technical expertise.</p>
                <Link to="/what-we-do" style={{ color: 'var(--accent-gold)', textDecoration: 'none', letterSpacing: '1px', fontSize: '12px', fontWeight: '600' }}>DISCOVER MORE →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="section container">
        <ScrollReveal className="glass premium-hover" style={{ padding: '80px', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="section-header centered">
            <span className="section-tag">Legacy & Impact</span>
            <h2 className="serif" style={{ fontSize: '56px', marginTop: '20px' }}>OUR PROJECTS</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '20px', maxWidth: '800px', margin: '0 auto 40px' }}>
            Luxury is a responsibility. From restoring ancient temples to implementing sustainable water management, we ensure Kerala's beauty remains for generations.
          </p>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginBottom: '50px' }}>
            <div>
              <div style={{ fontSize: '32px', color: 'var(--accent-gold)', fontWeight: '700' }}>
                <Counter end={150} suffix="+" />
              </div>
              <p style={{ fontSize: '10px', letterSpacing: '1px' }}>SITES RESTORED</p>
            </div>
            <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', height: '40px' }}></div>
            <div>
              <div style={{ fontSize: '32px', color: 'var(--accent-gold)', fontWeight: '700' }}>
                <Counter end={40} prefix="₹" suffix="Cr+" />
              </div>
              <p style={{ fontSize: '10px', letterSpacing: '1px' }}>COMMUNITY IMPACT</p>
            </div>
          </div>
          <Link to="/projects" className="btn-explore" style={{ textDecoration: 'none', background: 'transparent', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)', width: 'fit-content', margin: '0 auto' }}>VIEW OUR LEGACY</Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default PageSamples;
