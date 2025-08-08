'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function GradientBackground() {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      x.set(nx);
      y.set(ny);
      document.documentElement.style.setProperty('--x', `${nx*100}%`);
      document.documentElement.style.setProperty('--y', `${ny*100}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  const bgX = useTransform(springX, v => `${v*100}%`);
  const bgY = useTransform(springY, v => `${v*100}%`);

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 -z-10 animated-gradient"
      style={{ backgroundPositionX: bgX, backgroundPositionY: bgY }}
    />
  );
}
