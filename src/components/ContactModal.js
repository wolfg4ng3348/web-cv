import React, { useState } from "react";

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar emailjs, Formspree, etc.
    setEnviado(true);
    setTimeout(() => {
      setEnviado(false);
      onClose();
      setForm({ nombre: "", email: "", mensaje: "" });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Contáctame</h2>
        {enviado ? (
          <p className="enviado">¡Mensaje enviado! Gracias por contactarme.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
}