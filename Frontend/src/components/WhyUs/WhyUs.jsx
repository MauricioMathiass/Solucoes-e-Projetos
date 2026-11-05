import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Clock, 
  Award, 
  Target, 
  Headphones, 
  Leaf,
  TrendingUp,
  Shield
} from 'lucide-react';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  const differentials = [
    { 
      id: 'expertise',
      title: 'Expertise Comprovada', 
      desc: 'Equipe multidisciplinar com profissionais experientes e qualificados, atualizados com as mais recentes tecnologias e normas do setor.',
      icon: Users,
      color: '#005f73',
      delay: 0
    },
    { 
      id: 'prazos',
      title: 'Compromisso com Prazos', 
      desc: 'Planejamento rigoroso e gestão eficiente garantem o cumprimento dos cronogramas estabelecidos sem comprometer a qualidade.',
      icon: Clock,
      color: '#0a9396',
      delay: 0.1
    },
    { 
      id: 'qualidade',
      title: 'Qualidade Garantida', 
      desc: 'Processos certificados e controle de qualidade em todas as etapas, desde o projeto até a entrega final da obra.',
      icon: Award,
      color: '#ee9b00',
      delay: 0.2
    },
    { 
      id: 'solucoes',
      title: 'Soluções Personalizadas', 
      desc: 'Desenvolvemos propostas customizadas que atendem às necessidades específicas de cada cliente e projeto.',
      icon: Target,
      color: '#94d2bd',
      delay: 0.3
    },
    { 
      id: 'atendimento',
      title: 'Atendimento Dedicado', 
      desc: 'Comunicação transparente e suporte contínuo durante todo o ciclo do projeto, garantindo alinhamento constante.',
      icon: Headphones,
      color: '#005f73',
      delay: 0.4
    },
    { 
      id: 'ambiental',
      title: 'Responsabilidade Ambiental', 
      desc: 'Compromisso com práticas sustentáveis e eficiência energética em todos os nossos projetos e obras.',
      icon: Leaf,
      color: '#0a9396',
      delay: 0.5
    }
  ];

  return (
    <div className={styles.whyUs}>
      <div className={styles.container}>
        {/* Cabeçalho */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Por que escolher a <span>Soluções Engenharia?</span></h2>
          <p className={styles.sectionSubtitle}>
            Nossos diferenciais que fazem a diferença no seu projeto
          </p>
        </motion.div>

        {/* Grid de Diferenciais */}
        <div className={styles.grid}>
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                key={index}
                id={`why-${item.id}`}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.cardIcon} style={{ background: `${item.color}15` }}>
                  <IconComponent size={42} strokeWidth={1.5} color={item.color} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className={styles.cardNumber}>
                  <span>0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Seção de Estatísticas */}
        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.statItem}>
            <motion.div 
              className={styles.statNumber}
              initial={{ count: 0 }}
              whileInView={{ count: 50 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <TrendingUp size={32} color="#ee9b00" />
              <span>+50</span>
            </motion.div>
            <p>Projetos Entregues</p>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <motion.div className={styles.statNumber}>
              <Shield size={32} color="#ee9b00" />
              <span>+30</span>
            </motion.div>
            <p>Clientes Satisfeitos</p>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <motion.div className={styles.statNumber}>
              <Award size={32} color="#ee9b00" />
              <span>+10</span>
            </motion.div>
            <p>Anos de Experiência</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
