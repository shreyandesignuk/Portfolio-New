import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

function TestimonialSet({ testimonials, setRef, hidden = false }) {
  return (
    <div className="about-testimonial-set" ref={setRef} aria-hidden={hidden || undefined}>
      {testimonials.map((testimonial) => (
        <article className="about-testimonial-card" key={testimonial.company}>
          <p className="about-testimonial-quote">
            <strong>{testimonial.emphasis}</strong>
            {testimonial.body}
          </p>

          <div className="about-testimonial-source">
            <img
              src={testimonial.logo}
              alt={hidden ? '' : `${testimonial.company} logo`}
              style={{ width: testimonial.logoWidth }}
            />
            <p>{testimonial.attribution}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function TestimonialMarquee({ testimonials, duration = 80 }) {
  const [setRef, { width: setWidth }] = useMeasure();
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="about-testimonial-viewport"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="about-testimonial-track"
        animate={reduceMotion || !setWidth ? { x: 0 } : { x: [0, -setWidth] }}
        transition={{
          duration: isHovered ? 25 : duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <TestimonialSet testimonials={testimonials} setRef={setRef} />
        <TestimonialSet testimonials={testimonials} hidden />
      </motion.div>
    </div>
  );
}
