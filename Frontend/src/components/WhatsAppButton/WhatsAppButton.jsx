import React from 'react';
import styles from './WhatsAppButton.module.css';

const WhatsAppButton = () => {
  const phoneNumber = '5592984025090';
  const message = 'Olá! Gostaria de mais informações sobre os serviços da Soluções Engenharia.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
      aria-label="WhatsApp"
    >
      <img
        src="/images/whatsapp_logo-removebg-preview.png"
        alt=""
        className={styles.whatsappIcon}
        aria-hidden="true"
      />
    </a>
  );
};

export default WhatsAppButton;
