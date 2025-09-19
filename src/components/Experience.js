import React from "react";

const jobs = [
  {
    title: "Soporte Informático",
    company: "Supermercados Cugat",
    period: "Febrero 2025 - Julio 2025 • Rancagua, Chile",
    tasks: [
      "Brindé soporte a sistemas administrativos, operativos y de punto de venta, garantizando su disponibilidad y rendimiento",
      "Administré credenciales, accesos y perfiles de usuario en sistemas internos y plataformas corporativas",
      "Supervisé el correcto funcionamiento de sistemas ERP, control de stock, facturación y etiquetado",
      "Configuré e instalé equipos informáticos nuevos, asegurando su correcto funcionamiento en el entorno comercial"
    ]
  },
  {
    title: "Analista de Sistemas",
    company: "Grupo Cygnus",
    period: "Febrero 2022 - Agosto 2023 • Santiago, Chile",
    tasks: [
      "Brindé soporte técnico a usuarios internos, resolviendo incidencias y capacitando trabajadores",
      "Colaboré en el desarrollo de una plataforma unificada de componentes y herramientas para la gestión de inventarios",
      "Implementé prácticas de integración y entrega continua, mejorando la eficiencia del ciclo de desarrollo",
      "Trabajé en frontend para mejorar la legibilidad y optimización de UX/UI para trabajadores internos",
      "Construí herramientas de gestión para análisis de gastos y pagos dentro del manejo de personas y contratos"
    ]
  },
  {
    title: "Asistente Logístico",
    company: "Grupo Cygnus",
    period: "Agosto 2018 - Febrero 2022 • Santiago, Chile",
    tasks: [
      "Optimicé flujos de trabajo en la gestión de inventarios",
      "Mejoré la eficiencia en las operaciones de recepción y despacho de materiales",
      "Desarrollé procesos logísticos para garantizar la correcta manipulación y almacenamiento de productos",
      "Supervisé flujo de productos dentro de la bodega para evitar retrasos y pérdidas"
    ]
  },
  {
    title: "Digitador Administrativo",
    company: "Ilustre Municipalidad de Providencia",
    period: "Enero 2014 - Junio 2016 • Santiago, Chile",
    tasks: [
      "Manejé y administré información relacionada con Permisos de Circulación y multas de tránsito",
      "Mantuve registros precisos y procesé solicitudes de permisos",
      "Aseguré que los datos estuvieran actualizados y disponibles para consulta"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="fade-in">Experiencia Profesional</h2>
        <div className="experience-grid">
          {jobs.map((job, idx) => (
            <div className="job fade-in" key={idx}>
              <div className="job-header">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">{job.company}</p>
                <p className="job-period">{job.period}</p>
              </div>
              <div className="job-description">
                <ul>
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}