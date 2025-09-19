import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling
    const handleClick = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };
    document.addEventListener("click", handleClick);

    // Fade-in animation
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, observerOptions);
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    // Header background on scroll
    const header = document.querySelector(".header");
    const onScroll = () => {
      if (window.scrollY > 100) {
        header.style.backgroundColor = "rgba(10, 10, 10, 0.98)";
      } else {
        header.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero onContactClick={() => setModalOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Education />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default App;
