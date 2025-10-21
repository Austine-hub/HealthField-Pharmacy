// ============================================================================
// Enhanced Hero Section (2025)
// - Preserves original structure & functionality
// - Adds smooth fade transitions, semantic fixes, UX & accessibility upgrades
// ============================================================================

import React, { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hero banner images
import pic1 from '../../assets/photos/photo1.jpg';
import pic2 from '../../assets/photos/photo2.jpg';
import pic3 from '../../assets/photos/photo3.jpg';
import pic4 from '../../assets/photos/photo4.jpg';
import pic5 from '../../assets/photos/photo5.jpg';

const images = [pic1, pic2, pic3, pic4, pic5];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  // Auto-slide every 6 seconds
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className={styles.hero} aria-label="Pharmacy promotions and offers">
      <div
        className={styles.carousel}
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === current ? styles.active : ''}`}
            style={{ backgroundImage: `url(${image})` }}
            role="img"
            aria-hidden={index !== current}
          />
        ))}

        {/* Navigation Arrows */}
        <button
          className={`${styles.arrow} ${styles.prev}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>
        <button
          className={`${styles.arrow} ${styles.next}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Overlay Content */}
      <div className={styles.overlay}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className={styles.head}>HEALTHFIELD PHARMACEUTICALS</h1>
          <h2 className={styles.subhead}>Your Trusted Online Pharmacy</h2>
          <p>
            Affordable medicines, quality healthcare, and expert support — anytime, anywhere.
          </p>
          <div className={styles.buttons}>
            <Link to="/products/prescription" className={styles.primaryBtn}>
              Shop Now
            </Link>
            <Link to="/contact-us" className={styles.secondaryBtn}>
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
