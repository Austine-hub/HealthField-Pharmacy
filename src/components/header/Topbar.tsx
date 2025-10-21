// ============================================================================
// Modern, Accessible, Pharmacy Topbar (React 18+, 2025)
// Harmonized with Framer Motion + clsx + react-icons
// ============================================================================

import { motion } from "framer-motion";
import type { Variants } from "framer-motion"; // ✅ Type-only import fix
import clsx from "clsx";
import styles from "./Topbar.module.css";
import { FaPhoneAlt, FaWhatsapp, FaCapsules } from "react-icons/fa";

// ========================
// Animation Variants
// ========================
const fadeIn: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // ✅ Equivalent to "easeOut"
    },
  },
};

const Topbar: React.FC = () => {
  return (
    <motion.header
      className={styles.topbar}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      role="banner"
    >
      <div className={styles.container}>
        {/* ---------- Brand ---------- */}
        <a href="/" className={styles.brand} aria-label="Healthfield Pharmacy Home">
          <FaCapsules className={styles.logoIcon} aria-hidden="true" />
          <span className={styles.brandName}>Healthfield Pharmacy Juja</span>
        </a>

        {/* ---------- Tagline ---------- */}
        <p className={styles.tagline}>
          Our Clients, Our Priority —{" "}
          <span className={styles.highlight}>Trusted Healthcare Near You</span>
        </p>

        {/* ---------- Contact Actions ---------- */}
        <div className={styles.actions}>
          <a
            href="tel:+254700000000"
            className={clsx(styles.actionBtn, styles.callBtn)}
            aria-label="Call Healthfield Pharmacy"
          >
            <FaPhoneAlt className={styles.icon} aria-hidden="true" />
            <span className={styles.actionText}>Call to Order</span>
          </a>

          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(styles.actionBtn, styles.whatsappBtn)}
            aria-label="Chat with Healthfield Pharmacy on WhatsApp"
          >
            <FaWhatsapp className={styles.icon} aria-hidden="true" />
            <span className={styles.actionText}>WhatsApp Order</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Topbar;
