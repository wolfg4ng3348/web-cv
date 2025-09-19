import React from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <p>¿Interesado en trabajar juntos?</p>
        <div className="footer-links">
          <a href="mailto:wilhems.wolfgang.muller@gmail.com" aria-label="Email">
            <FaEnvelope size={28} />
          </a>
          <a
            href="https://wa.me/56958100493?text=Hola%20Wilhems,%20me%20interesa%20trabajar%20contigo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={28} />
          </a>
          <a
            href="https://linkedin.com/in/wolfgang-muller"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
}