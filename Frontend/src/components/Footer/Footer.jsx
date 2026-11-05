import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3>Soluções Engenharia</h3>
            <p>Engenharia, Consultoria, Arquitetura e Serviços Técnicos com excelência e sustentabilidade.</p>
          </div>
          
          <div className={styles.column}>
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4>Contato</h4>
            <p>📞 (92) 98402-5090</p>
            <p>✉️ contato@solucoesengenharia.tec.br</p>
            <p>📷 @solucoesengtec</p>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; 2026 Soluções Engenharia e Projetos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;