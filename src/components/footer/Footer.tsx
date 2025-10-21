import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaCapsules,
} from "react-icons/fa";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={clsx(styles.footer, className)}
      role="contentinfo"
      aria-label="Website footer"
    >
      {/* Fade-in container */}
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* -------- Brand Section -------- */}
        <section className={styles.brandSection}>
          <div className={styles.brandLogo}>
            <FaCapsules className={styles.brandIcon} aria-hidden="true" />
            <span className={styles.brandName}>HealthField Pharmacy</span>
          </div>
          <p className={styles.brandTagline}>
            Trusted Healthcare, Beauty & Wellness — Delivered with Care
          </p>
        </section>

        {/* -------- Quick Links -------- */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <nav className={styles.links} aria-label="Quick links">
            <a href="/terms" className={styles.link}>
              Terms & Conditions
            </a>
            <a href="/privacy" className={styles.link}>
              Privacy Policy
            </a>
            <a href="/delivery" className={styles.link}>
              Delivery & Return Policy
            </a>
            <a href="/contact" className={styles.link}>
              Contact Us
            </a>
          </nav>
        </section>

        {/* -------- About -------- */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>About HealthField</h3>
          <p className={styles.description}>
            Your go-to online pharmacy in Kenya! Explore our range of
            prescription medicines, beauty, skincare, haircare, and wellness
            essentials from trusted brands.
          </p>
        </section>

        {/* -------- Social Media -------- */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Connect With Us</h3>
          <div className={styles.socialLinks}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit our Instagram page"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Visit our YouTube channel"
            >
              <FaYoutube />
            </a>
          </div>
        </section>

        {/* -------- Contact / Order by Phone -------- */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Order by Phone</h3>
          <p className={styles.phoneDescription}>
            Need help placing an order? Our Customer Support team is happy to
            assist.
          </p>
          <p className={styles.phoneInfo}>
            Call us on{" "}
            <a href="tel:0796787207" className={styles.phoneLink}>
              <FaPhoneAlt aria-hidden="true" /> 0796 787 207
            </a>{" "}
            (10am – 6pm)
          </p>
        </section>
      </motion.div>

      {/* -------- Copyright -------- */}
      <div className={styles.copyright}>
        <p className={styles.copyText}>
          © {currentYear} HealthField Pharmacy — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

