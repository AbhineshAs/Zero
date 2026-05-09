import PropertyCard from './PropertyCard';
import ScrollReveal from './ScrollReveal';
import blanketImage from '../assets/2025-07-13.jpg';
import valleImage from '../assets/2025-12-21.jpg';

const FeaturedStays = () => {

  const stays = [
    {
      title: "Blanket Hotel & Spa | Luxury 5 Star Resorts in Munnar",
      price: "20,000",
      image: blanketImage,
      badge: "FEATURED STAY"
    },
    {
      title: "The Valle Munnar",
      price: "11,917",
      image: valleImage,
      badge: "FEATURED STAY"
    }
  ];

  return (
    <section className="section container">
      <ScrollReveal>
        <div className="section-header centered" style={{ marginBottom: '80px' }}>
          <span className="section-tag">Luxury Stays</span>
          <h2 className="serif" style={{ fontSize: '56px', marginBottom: '20px' }}>HANDPICKED FOR YOUR COMFORT</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            We have curated an exclusive selection of Kerala's most prestigious resorts and heritage homes, each offering a unique blend of traditional elegance and modern sophistication.
          </p>
        </div>
      </ScrollReveal>
      <div className="featured-stays-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
        {stays.map((stay, index) => (
          <PropertyCard key={index} {...stay} delay={`delay-${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedStays;
