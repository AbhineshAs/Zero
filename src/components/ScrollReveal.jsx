import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component that adds a 'visible' class when it enters the viewport.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Elements to be revealed
 * @param {string} props.className - Additional classes (e.g., 'reveal', 'reveal-left')
 * @param {string} props.delay - Animation delay class (e.g., 'delay-1')
 * @param {number} props.threshold - Intersection observer threshold (0 to 1)
 */
const ScrollReveal = ({ 
  children, 
  className = "reveal", 
  delay = "", 
  threshold = 0.1,
  style = {}
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      className={`${className} ${delay} ${isVisible ? 'visible' : ''}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
