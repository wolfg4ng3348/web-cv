import React from "react";

export default function Hero({ onContactClick }) {
  return (
    <section id="home" className="hero fade-in">
      <div className="hero-content">
        <h1>Wilhems Wolfgang Müller</h1>
        <p className="hero-subtitle">
          Experiencia Digital que Impulsa Resultados
        </p>
        <p className="location">Rancagua, Chile</p>
        <button className="cta-button" onClick={onContactClick}>Contáctame</button>
      </div>
    </section>
  );
}