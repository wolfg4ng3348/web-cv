import React from "react";
import { FaCode, FaFileAlt, FaTools, FaPaintBrush, FaProjectDiagram, FaLanguage } from "react-icons/fa";

const skills = [
  {
    category: "Desarrollo Web",
    icon: <FaCode size={32} color="#7b2ff2" />,
    details:
      "HTML5, CSS3, JavaScript, Node.js, PHP, C#, SQL Server, Bootstrap y WordPress. Desarrollo de sitios y aplicaciones web responsivas, integración de bases de datos y personalización avanzada de CMS."
  },
  {
    category: "Ofimática Avanzada",
    icon: <FaFileAlt size={32} color="#7b2ff2" />,
    details:
      "Excel (funciones avanzadas, tablas dinámicas, automatización de reportes), Word y PowerPoint. Optimización de flujos de trabajo y manejo eficiente de grandes volúmenes de datos."
  },
  {
    category: "Soporte Técnico y Sistemas",
    icon: <FaTools size={32} color="#7b2ff2" />,
    details:
      "Gestión de tickets, instalación y configuración de software, mantenimiento preventivo y correctivo de hardware. Administración de sistemas operativos Windows y Linux, configuración de redes LAN/WiFi, respaldo y recuperación de datos, y asistencia remota a usuarios."
  },
  {
    category: "Diseño y Creatividad",
    icon: <FaPaintBrush size={32} color="#7b2ff2" />,
    details:
      "Adobe Photoshop, Figma y Canva. Diseño de interfaces, edición profesional de imágenes y creación de contenido visual atractivo para web y redes sociales."
  },
  {
    category: "Gestión de Proyectos",
    icon: <FaProjectDiagram size={32} color="#7b2ff2" />,
    details:
      "Planificación, seguimiento y entrega de proyectos digitales. Experiencia con metodologías ágiles (Scrum, Kanban) y herramientas como Trello y Jira."
  },
  {
    category: "Idiomas",
    icon: <FaLanguage size={32} color="#7b2ff2" />,
    details:
      "Español (nativo) e inglés (intermedio-avanzado). Capacidad para comunicarme y documentar proyectos en ambos idiomas."
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="fade-in">Habilidades Técnicas</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div className="skill-category fade-in" key={idx}>
              <div style={{ marginBottom: "1rem" }}>{skill.icon}</div>
              <h3>{skill.category}</h3>
              <p>{skill.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}