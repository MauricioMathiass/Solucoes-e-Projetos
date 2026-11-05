import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { 
  Building2, 
  Briefcase, 
  ClipboardList, 
  Search, 
  HardHat, 
  FileText, 
  Home, 
  Route, 
  Handshake 
} from 'lucide-react';
import styles from './Services.module.css';

const servicesData = [
  { 
    id: 1,
    title: 'Projetos Arquitetônicos, Estruturais e Complementares',
    shortDesc: 'Projetos que aliam funcionalidade, estética e sustentabilidade.',
    icon: Building2,
    color: '#005f73',
    fullContent: {
      description: 'Desenvolvemos projetos arquitetônicos que aliam funcionalidade, estética e sustentabilidade, criando espaços que atendem às necessidades específicas de cada cliente.',
      details: [
        'Projetos Arquitetônicos e urbanísticos',
        'Reformas, ampliações e decoração de Interiores',
        'Projeto Estrutural e Complementares (Elétrica, Hidrossanitário, Impermeabilização, Prevenção contra incêndio, Climatização, automação)',
        'Compatibilização de Projetos e orçamentos',
        'Análise e Modelagem estrutural, verificação de segurança e estabilidade',
        'Especificação Técnica de Projeto',
        'Laudos técnicos e perícias de Engenharia'
      ]
    }
  },
  { 
    id: 2,
    title: 'Consultoria Técnica Especializada',
    shortDesc: 'Assessoria estratégica para tomada de decisões e otimização de processos.',
    icon: Briefcase,
    color: '#0a9396',
    fullContent: {
      description: 'Assessoria técnica para tomada de decisões estratégicas, análise de viabilidade de empreendimentos e otimização de processos construtivos. Minuciosidade para garantir qualidade no que está projetado e gerenciamento eficiente de obras.',
      details: [
        'Análise de Projetos, desenvolvimento de escopo e orçamento para obras',
        'Auditoria de Obras e escopo (conformidade, qualidade técnica, eficiência e economicidade)',
        'Gerenciamento de Projetos e Obras',
        'Assistência Técnica Especializada',
        'Análise de Risco de Projetos/Obras',
        'Vistoria e Perícia Técnica'
      ]
    }
  },
  { 
    id: 3,
    title: 'Gerenciamento e Assistência Técnica de Obras',
    shortDesc: 'Acompanhamento completo de todas as etapas da construção.',
    icon: ClipboardList,
    color: '#ee9b00',
    fullContent: {
      description: 'Acompanhamento técnico, administrativo e financeiro de todas as etapas da construção, garantindo que o empreendimento seja executado conforme os projetos, prazos, custos e padrões de qualidade estabelecidos.',
      details: [
        'Análise Crítica dos Projetos e Orçamento',
        'Gestão de Contrato',
        'Elaboração do Plano de Gestão de Risco da Obra',
        'Zelo pela Segurança (PGR) e Limpeza da Obra',
        'Planejamento da Etapas x Cronograma de Obras',
        'Planejamento de Compras e Aquisições',
        'Controle Técnicos e Normativo das Etapas da Obra',
        'Controle do Orçamento x Avanço da Obra',
        'Aprovação da Obra e licenças (Habite-se)',
        'Relatórios mensais e Dashboard de Indicadores',
        'Acompanhamento de Pós Obra'
      ]
    }
  },
  { 
    id: 4,
    title: 'Vistoria, Inspeção e Perícia Técnica',
    shortDesc: 'Avaliação técnica minuciosa das condições da edificação.',
    icon: Search,
    color: '#94d2bd',
    fullContent: {
      description: 'Avaliação técnica minuciosa das condições da edificação, identificando anomalias, riscos, não conformidades e necessidades de intervenção para garantir segurança, desempenho e conformidade normativa. Inclusive para Pré-Entrega de Imóvel por parte das Incorporadoras e construtoras. Trabalho de Assistência Técnica Judicial.',
      details: [
        'Identificação de anomalias e patologias',
        'Análise de conformidade normativa',
        'Laudos técnicos detalhados',
        'Assistência técnica judicial',
        'Pré-entrega de imóveis',
        'Avaliação de riscos estruturais'
      ]
    }
  },
  { 
    id: 5,
    title: 'Análise e Diagnóstico Estrutural',
    shortDesc: 'Estudo detalhado do comportamento estrutural da edificação.',
    icon: HardHat,
    color: '#005f73',
    fullContent: {
      description: 'Estudo detalhado do comportamento estrutural da edificação, com identificação de patologias, causas e impactos, fornecendo recomendações técnicas para recuperação, reforço ou adequações.',
      details: [
        'Diagnóstico de patologias estruturais',
        'Análise de causas e impactos',
        'Recomendações técnicas para recuperação',
        'Projetos de reforço estrutural',
        'Acompanhamento de intervenções',
        'Laudos de estabilidade'
      ]
    }
  },
  { 
    id: 6,
    title: 'Escopo, Especificação e Orçamento',
    shortDesc: 'Elaboração completa para obras condominiais e empresariais.',
    icon: FileText,
    color: '#0a9396',
    fullContent: {
      description: 'Elaboração e desenvolvimento de especificações para obras condominiais. O escopo e o orçamento são elementos fundamentais para o sucesso de qualquer obra, especialmente em contextos como condomínios, onde há necessidade de transparência e controle rigoroso.',
      details: [
        'Elaboração de escopo detalhado',
        'Especificações técnicas completas',
        'Orçamento detalhado',
        'Planejamento de compras',
        'Controle de custos',
        'Gestão de fornecedores'
      ]
    }
  },
  { 
    id: 7,
    title: 'Construção de Obras Civis',
    shortDesc: 'Execução completa de obras residenciais, comerciais e industriais.',
    icon: Home,
    color: '#ee9b00',
    fullContent: {
      description: 'Realizamos a execução completa de obras civis com foco em qualidade, eficiência e cumprimento de prazos. Atuamos desde fundações até acabamentos, oferecendo soluções construtivas modernas, gestão técnica especializada e controle rigoroso de cada etapa.',
      details: [
        'Obras residenciais',
        'Obras comerciais',
        'Obras industriais',
        'Fundações e estrutura',
        'Acabamentos de alto padrão',
        'Gestão completa da obra'
      ]
    }
  },
  { 
    id: 8,
    title: 'Rede de Infraestrutura Urbana',
    shortDesc: 'Soluções completas em infraestrutura urbana.',
    icon: Route,
    color: '#94d2bd',
    fullContent: {
      description: 'Executamos soluções completas em infraestrutura urbana, incluindo pavimentação, drenagem, redes de água e esgoto, urbanização e obras de contenção em Geral. Buscamos entregar segurança, durabilidade e desempenho.',
      details: [
        'Pavimentação asfáltica e intertravado',
        'Sistemas de drenagem pluvial',
        'Redes de água e esgoto',
        'Urbanização e paisagismo',
        'Obras de contenção',
        'Sinalização viária'
      ]
    }
  },
  { 
    id: 9,
    title: 'Obras de Terceiros - Gerenciamento',
    shortDesc: 'Gerenciamento total com relatórios periódicos e excelência.',
    icon: Handshake,
    color: '#005f73',
    fullContent: {
      description: 'Oferecemos gerenciamento total, desde orçamento, gestão de compras, de contratação, indicadores de evolução da obra, ações de segurança no trabalho, como subsidiamos o cliente de relatórios periódicos e registros da evolução da obra, sempre buscando pela excelência em todas etapas construtivas.',
      details: [
        'Gestão de orçamento',
        'Gestão de compras e contratações',
        'Indicadores de evolução',
        'Segurança do trabalho',
        'Relatórios periódicos',
        'Controle de qualidade'
      ]
    }
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalContentRef = useRef(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  // Trava o scroll do body corretamente
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  // Rola o modal para o topo quando abrir
  useEffect(() => {
    if (modalOpen && modalContentRef.current) {
      setTimeout(() => {
        modalContentRef.current.scrollTop = 0;
      }, 50);
    }
  }, [modalOpen]);

  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nossos Serviços
        </motion.h2>
        
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Clique em qualquer serviço para ver os detalhes completos
        </motion.p>

        <div className={styles.grid}>
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div 
                key={service.id}
                id={`service-${service.id}`}
                className={styles.card}
                onClick={() => openModal(service)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <div className={styles.cardIcon}>
                  <IconComponent size={48} strokeWidth={1.5} color={service.color} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.clickHint}>Clique para detalhes →</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL VIA PORTAL - Centralizado na tela */}
      {createPortal(
        <AnimatePresence>
          {modalOpen && selectedService && (
            <motion.div 
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div 
                className={styles.modal}
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                style={{ borderTop: `6px solid ${selectedService.color}` }}
              >
                <div className={styles.modalHeader}>
                  <div className={styles.modalIcon}>
                    {(() => {
                      const ModalIcon = selectedService.icon;
                      return <ModalIcon size={28} strokeWidth={1.5} color={selectedService.color} />;
                    })()}
                  </div>
                  <h2>{selectedService.title}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>×</button>
                </div>

                <div className={styles.modalContentScroll} ref={modalContentRef}>
                  <div className={styles.logoSection}>
                    <img 
                      src="/images/COLORIDO.png" 
                      alt="Soluções Engenharia"
                      className={styles.modalLogo}
                      onError={(e) => e.target.style.display = 'none'}
                    />
                    <span className={styles.logoText}>Soluções Engenharia</span>
                  </div>
                  
                  <p className={styles.modalDescription}>
                    {selectedService.fullContent.description}
                  </p>
                  
                  <h3 className={styles.detailsTitle}>📋 Principais Atividades:</h3>
                  
                  <div className={styles.detailsGrid}>
                    {selectedService.fullContent.details.map((detail, idx) => (
                      <motion.div 
                        key={idx}
                        className={styles.detailItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className={styles.checkMark}>✓</span>
                        <span>{detail}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className={styles.modalButtons}>
                    <a href="#contact" className={styles.contactBtn} onClick={() => {
                      closeModal();
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 300);
                    }}>
                      Solicitar este serviço
                    </a>
                    <button onClick={closeModal} className={styles.closeModalBtn}>
                      Fechar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Services;
