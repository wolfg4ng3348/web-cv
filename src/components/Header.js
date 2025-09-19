import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#experience", label: "Experiencia" },
  { href: "#skills", label: "Habilidades" },
  { href: "#education", label: "Educación" },
  { href: "#contact", label: "Contacto" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="logo">W.W.M</a>
        <button
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
        <ul className={`nav-links${open ? " show" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}