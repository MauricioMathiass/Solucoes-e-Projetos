import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Services from './components/servico/Services.jsx';
import WhyUs from './components/WhyUs/WhyUs.jsx';
import Clients from './components/Clients/Clients.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';
import styles from './App.module.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(`.${styles.fadeIn}`);
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <motion.section 
          id="home" 
          className={`${styles.section} ${styles.snapSection} ${styles.fadeIn}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.section>


         <motion.section 
          id="services" 
          className={`${styles.section} ${styles.snapSection} ${styles.fadeIn}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Services />
        </motion.section>
        
        <motion.section 
          id="about" 
          className={`${styles.section} ${styles.snapSection} ${styles.fadeIn}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <About />
        </motion.section>
        
      
        
        <motion.section 
          id="why" 
          className={`${styles.section} ${styles.snapSection} ${styles.fadeIn}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <WhyUs />
        </motion.section>

        <motion.section 
          id="clients" 
          className={`${styles.section} ${styles.snapSection} ${styles.fadeIn}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Clients />
        </motion.section>
        
        <motion.section 
          id="contact" 
          className={`${styles.section} ${styles.snapSection} ${styles.fadeIn}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>
      </main>
      <div className={styles.footerSnap}>
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default App;
