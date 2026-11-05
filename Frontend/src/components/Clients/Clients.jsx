import React from 'react';
import { motion } from 'framer-motion';
import { Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Clients.module.css';

// Array de clientes/empresas com suas respectivas logos
const clients = [
  { 
    id: 1,
    name: 'Águas de Manaus',
    logo: '/clientes/aguas.png',
    description: 'Parceria em projetos de saneamento',
    color: '#005f73'
  },
  { 
    id: 2,
    name: 'ARCHITECTCH',
    logo: '/clientes/ARCHITECH.png',
    description: 'Projetos arquitetônicos',
    color: '#0a9396'
  },
  { 
    id: 3,
    name: 'BARÉ Arquitetura',
    logo: '/clientes/Bare.png',
    description: 'Projetos e consultoria',
    color: '#ee9b00'
  },
  { 
    id: 4,
    name: 'Concremat',
    logo: '/clientes/Concremat.png',
    description: 'Engenharia e tecnologia',
    color: '#94d2bd'
  },
  { 
    id: 5,
    name: 'Construtora Etam',
    logo: '/clientes/Etam.png',
    description: 'Obras e construções',
    color: '#005f73'
  },
  { 
    id: 6,
    name: 'Hevi',
    logo: '/clientes/Hevi.png',
    description: 'Embalagens',
    color: '#0a9396'
  },
  { 
    id: 7,
    name: 'Ponta Negra Empreendimentos',
    logo: '/clientes/PontaNegra_Empreendimentos.png',
    description: 'Empreendimentos imobiliários',
    color: '#ee9b00'
  },
  { 
    id: 8,
    name: 'Prefeitura de Manaus',
    logo: '/clientes/Prefeitura.png',
    description: 'Obras públicas e infraestrutura',
    color: '#94d2bd'
  },
  { 
    id: 9,
    name: 'UGPE - PROSAMIN+',
    logo: '/clientes/ugpe.png',
    description: 'Projetos de saneamento e urbanização',
    color: '#005f73'
  },
  // NOVAS EMPRESAS
  { 
    id: 10,
    name: 'Claro',
    logo: '/clientes/Claro.png',
    description: 'Infraestrutura de telecomunicações',
    color: '#0a9396'
  },
  { 
    id: 11,
    name: 'EMAN Asfaltos',
    logo: '/clientes/Emam.png',
    description: 'Pavimentação e asfaltamento',
    color: '#ee9b00'
  },
  { 
    id: 12,
    name: 'Grupo Tapajós',
    logo: '/clientes/GrupoTapajos.png',
    description: 'Comercial',
    color: '#94d2bd'
  },
  { 
    id: 13,
    name: 'LG',
    logo: '/clientes/LG.png',
    description: 'Projetos corporativos',
    color: '#005f73'
  },
  { 
    id: 14,
    name: 'NovaMed',
    logo: '/clientes/NovaMed.png',
    description: 'Fábrica Farmacêutica',
    color: '#0a9396'
  },
  { 
    id: 15,
    name: 'ORV Engenharia',
    logo: '/clientes/ORV.png',
    description: 'Parceria em projetos',
    color: '#ee9b00'
  },
  { 
    id: 16,
    name: 'Samsung',
    logo: '/clientes/Samsung.png',
    description: 'Projetos corporativos',
    color: '#94d2bd'
  }
];

const ClientLogo = ({ client }) => {
  const [hasLogoError, setHasLogoError] = React.useState(false);

  if (!client.logo || hasLogoError) {
    return (
      <div className={styles.initials} style={{ background: `${client.color}15`, color: client.color }}>
        {client.name.charAt(0)}
      </div>
    );
  }

  return (
    <img 
      src={client.logo} 
      alt={client.name}
      className={styles.logoImage}
      onError={() => setHasLogoError(true)}
    />
  );
};

const Clients = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const maxIndex = Math.max(0, clients.length - 3);
  const slideStarts = Array.from({ length: Math.ceil(clients.length / 3) }, (_, idx) => (
    Math.min(idx * 3, maxIndex)
  )).filter((start, idx, starts) => starts.indexOf(start) === idx);
  const activeDotIndex = slideStarts.reduce((closestIndex, start, idx) => {
    const closestStart = slideStarts[closestIndex];
    return Math.abs(currentIndex - start) < Math.abs(currentIndex - closestStart) ? idx : closestIndex;
  }, 0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 > maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const visibleClients = clients.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.clients}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.sectionIcon}>
            <Building2 size={32} color="#ee9b00" />
          </div>
          <h2 className={styles.sectionTitle}>Empresas que Confiam</h2>
          <div className={styles.titleDecoration}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p className={styles.sectionSubtitle}>
            Temos o orgulho de ter parceiros e clientes que confiam em nosso trabalho
          </p>
        </motion.div>

        <div 
          className={styles.sliderContainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button 
            className={`${styles.navBtn} ${styles.prevBtn} ${isHovered ? styles.visible : ''}`}
            onClick={prevSlide}
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.clientsGrid}>
            {visibleClients.map((client, index) => (
              <motion.div 
                key={client.id}
                className={styles.clientCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.clientLogo} style={{ borderColor: client.color }}>
                  <ClientLogo client={client} />
                </div>
                <h3>{client.name}</h3>
                <p>{client.description}</p>
                <div className={styles.clientBadge} style={{ background: client.color }}>
                  Parceiro
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn} ${isHovered ? styles.visible : ''}`}
            onClick={nextSlide}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores de slide */}
        <div className={styles.dots}>
          {slideStarts.map((start, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${activeDotIndex === idx ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(start)}
            />
          ))}
        </div>

        {/* Seção de depoimento/estatística */}
        <motion.div 
          className={styles.testimonial}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className={styles.testimonialText}>
            "Mais de 50 projetos entregues com excelência e satisfação garantida"
          </p>
          <div className={styles.testimonialAuthor}>
            <div className={styles.authorLine}></div>
            <span>Soluções Engenharia</span>
            <div className={styles.authorLine}></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;
