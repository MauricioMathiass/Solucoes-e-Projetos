import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [logoError, setLogoError] = useState(false);
  const fullText = 'Excelência em Engenharia';

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* LOGO GRANDE DA EMPRESA */}
          <motion.div 
            className={styles.logoWrapper}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          >
            {!logoError ? (
              <img 
                src="/images/COLORIDO.png" 
                alt="Soluções Engenharia e Projetos"
                className={styles.heroLogo}
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className={styles.logoFallback}>
                <span>Soluções</span>
                <span>Engenharia</span>
              </div>
            )}
          </motion.div>

          <motion.h1 
            className={styles.title}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Engenharia que <span className={styles.highlight}>transforma</span>
          </motion.h1>
          
          <motion.div 
            className={styles.typewriter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className={styles.typewriterText}>{text}</p>
            <span className={styles.cursor}>|</span>
          </motion.div>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Projetos sustentáveis, consultoria especializada e gestão de obras com excelência técnica
          </motion.p>
          
          <motion.div 
            className={styles.buttons}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a href="#contact" className={styles.btnPrimary}>
              Solicitar Orçamento
            </a>
            <a href="#services" className={styles.btnSecondary}>
              Nossos Serviços
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}></div>
        <p>Scroll</p>
      </div>
    </div>
  );
};

export default Hero;
