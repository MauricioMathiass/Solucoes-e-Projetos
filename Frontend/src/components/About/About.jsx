import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Diamond, Shield, Users, Leaf, Heart, Handshake } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const values = [
    { 
      title: 'Ética inegociável', 
      description: 'Relações transparentes e respeitosas em todos os níveis.',
      icon: Shield,
      color: '#005f73'
    },
    { 
      title: 'Parceria como caminho', 
      description: 'Não vemos concorrentes, mas aliados em potencial e o cliente como um sócio.',
      icon: Handshake,
      color: '#0a9396'
    },
    { 
      title: 'Sustentabilidade com futuro', 
      description: 'Compromisso com o futuro e com algo maior que nós.',
      icon: Leaf,
      color: '#94d2bd'
    },
    { 
      title: 'Pessoas como essência', 
      description: 'Com respeito e dignidade, formam quem somos.',
      icon: Users,
      color: '#ee9b00'
    }
  ];

  return (
    <div className={styles.about}>
      <div className={styles.container}>
        {/* Cabeçalho da seção */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Sobre Nós</h2>
          <p className={styles.sectionSubtitle}>
            Conheça quem somos, nossa trajetória e o que nos motiva
          </p>
        </motion.div>

        {/* Cards de Missão e Visão */}
        <div className={styles.missionVision}>
          <motion.div 
            id="about-mission"
            className={styles.missionCard}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardIcon}>
              <Target size={48} strokeWidth={1.5} color="#ee9b00" />
            </div>
            <h3>Missão</h3>
            <p>Desenvolver projetos, estudos, consultorias técnicas e serviços que valorizem a ideia do cliente de forma eficiente e sustentável.</p>
            <div className={styles.cardDecoration}></div>
          </motion.div>

          <motion.div 
            id="about-vision"
            className={styles.visionCard}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className={styles.cardIcon}>
              <Eye size={48} strokeWidth={1.5} color="#0a9396" />
            </div>
            <h3>Visão</h3>
            <p>Ser empresa de referência em projetos, serviços, estudos e consultoria em Infraestrutura urbana, reurbanização ambiental e saneamento no norte do Brasil.</p>
            <div className={styles.cardDecoration}></div>
          </motion.div>
        </div>

        {/* Seção de Valores */}
        <motion.div 
          id="about-values"
          className={styles.valuesSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.valuesHeader}>
            <Diamond size={32} strokeWidth={1.5} color="#ee9b00" />
            <h3>Nossos Valores</h3>
          </div>
          
          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div 
                  key={index}
                  className={styles.valueCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  style={{ borderBottom: `3px solid ${value.color}` }}
                >
                  <div className={styles.valueIcon} style={{ background: `${value.color}15` }}>
                    <IconComponent size={32} strokeWidth={1.5} color={value.color} />
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Diferencial / Expertises */}
        <motion.div 
          id="about-expertise"
          className={styles.expertise}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.expertiseContent}>
            <Heart size={40} strokeWidth={1.5} color="#ee9b00" />
            <h3>Expertise Comprovada</h3>
            <p>
              Nossos profissionais participaram de grandes projetos de transformação socioambiental, 
              urbanização, mobilidade urbana, obras habitacionais, infraestrutura urbana e saneamento, 
              oferecendo alto nível de informação técnica e qualidade.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
