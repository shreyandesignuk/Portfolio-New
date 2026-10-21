import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import useMeasure from 'react-use-measure';

function LogoSet({ clients, setRef, hidden = false }) {
  return (
    <div className="logo-set" ref={setRef} aria-hidden={hidden || undefined}>
      {clients.map((client) => (
        <div className={`logo-slot ${client.className}`} key={client.name}>
          <div className="logo-crop">
            <img src={client.src} alt={hidden ? '' : `${client.name} logo`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function LogoMarquee({ clients, duration = 80, reverse = false }) {
  const [setRef, { width: setWidth }] = useMeasure();
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = useReducedMotion();
  const x = reverse ? [-setWidth, 0] : [0, -setWidth];

  return (
    <div
      className="logo-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="logo-track"
        animate={reduceMotion || !setWidth ? { x: 0 } : { x }}
        transition={{
          duration: isHovered ? 25 : duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <LogoSet clients={clients} setRef={setRef} />
        <LogoSet clients={clients} hidden />
      </motion.div>
    </div>
  );
}
