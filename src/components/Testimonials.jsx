import React from 'react';
import ScrollReveal from './ScrollReveal';


const Testimonials = () => {
  const reviews = [
    {
      name: "Alexander van der Meer",
      location: "Netherlands",
      text: "The most authentic heritage experience I've had in Asia. Every detail was masterfully curated."
    },
    {
      name: "Sarah Jenkins",
      location: "United Kingdom",
      text: "Zyro Trips redefined luxury for us. The private backwater voyage was simply transcendent."
    },
    {
      name: "Hiroshi Tanaka",
      location: "Japan",
      text: "A perfect blend of traditional soul and modern comfort. Their attention to detail is unmatched."
    },
    {
      name: "Elena Rodriguez",
      location: "Spain",
      text: "The concierge service was impeccable. They anticipated our needs before we even spoke."
    },
    {
      name: "David Miller",
      location: "USA",
      text: "Exceeded all expectations. The heritage stay was like stepping back into a more elegant era."
    }
  ];

  // Double the reviews to create a seamless infinite loop
  const displayReviews = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="testimonials-section section">
      <div className="container">
        <ScrollReveal className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-tag">Guest Experiences</span>
          <h2 className="serif" style={{ fontSize: '48px', marginBottom: '20px' }}>VOICES OF THE VOYAGE</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Discover what our distinguished guests have to say about their bespoke experiences across Kerala.
          </p>
        </ScrollReveal>
      </div>

      
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {displayReviews.map((review, index) => (
            <div key={index} className="testimonial-card glass">
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-footer">
                <h4 className="serif">{review.name}</h4>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
