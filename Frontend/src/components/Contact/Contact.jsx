import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle,
  AlertCircle,
  Clock,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import styles from './Contact.module.css';

// Ícone do Instagram manual (SVG)
const InstagramIcon = ({ size = 22, color = "#ee9b00" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitNotice, setSubmitNotice] = useState('');
  const [loading, setLoading] = useState(false);
  const phoneNumber = '5592984025090';
  const whatsappMessage = 'Olá! Gostaria de mais informações sobre os serviços da Soluções Engenharia.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const address = 'Rua Rio Javari, 851, Nossa Senhora das Graças, Manaus - AM';
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const emailAddress = 'contato@solucoesengenharia.tec.br';
  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
  const formDestinationEmail = 'solucoesengtec@gmail.com';
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setSubmitError('');
    setSubmitNotice('');

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setSubmitError('EmailJS ainda não foi configurado. Informe SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY no arquivo .env.');
      setLoading(false);
      return;
    }

    const submissionData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || 'Não informado',
      message: formData.message.trim(),
      submittedAt: new Date().toLocaleString('pt-BR', {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: 'America/Manaus',
      }),
    };

    if (!submissionData.name || !submissionData.email || !submissionData.message) {
      setSubmitError('Preencha nome, e-mail e mensagem antes de enviar.');
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        {
          from_name: submissionData.name,
          user_name: submissionData.name,
          name: submissionData.name,
          from_email: submissionData.email,
          user_email: submissionData.email,
          email: submissionData.email,
          phone: submissionData.phone,
          user_phone: submissionData.phone,
          telefone: submissionData.phone,
          message: submissionData.message,
          user_message: submissionData.message,
          mensagem: submissionData.message,
          to_email: formDestinationEmail,
          reply_to: submissionData.email,
          submitted_at: submissionData.submittedAt,
        },
        {
          publicKey: emailJsPublicKey,
        }
      );

      setSubmitted(true);
      setSubmitNotice('Mensagem enviada com sucesso para solucoesengtec@gmail.com.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        setSubmitNotice('');
      }, 6000);
    } catch {
      setSubmitError('Não foi possível enviar pelo EmailJS agora. Confira a configuração do serviço/template e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { 
      anchorId: 'contact-phone',
      icon: Phone, 
      title: 'Telefone', 
      info: '(92) 98402-5090',
      sub: 'Disponível 24/7',
      color: '#005f73',
      delay: 0,
      link: whatsappUrl
    },
    { 
      anchorId: 'contact-email',
      icon: Mail, 
      title: 'E-mail', 
      info: emailAddress,
      sub: 'solucoesengtec@gmail.com',
      color: '#0a9396',
      delay: 0.1,
      link: emailUrl
    },
    { 
      anchorId: 'contact-social',
      icon: InstagramIcon, 
      title: 'Redes Sociais', 
      info: '@solucoesengtec',
      sub: 'Siga-nos no Instagram',
      color: '#ee9b00',
      delay: 0.2,
      link: 'https://instagram.com/solucoesengtec'
    },
    { 
      anchorId: 'contact-location',
      icon: MapPin, 
      title: 'Atendimento', 
      info: address,
      sub: 'Abrir rota no Google Maps',
      color: '#94d2bd',
      delay: 0.3,
      link: mapsUrl
    }
  ];

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>Entre em Contato</h2>
          <div className={styles.titleDecoration}>
            <span></span>
            <MessageCircle size={24} color="#ee9b00" />
            <span></span>
          </div>
          <p className={styles.sectionSubtitle}>
            Estamos prontos para atender você. Fale conosco!
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.infoSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoHeader}>
              <h3>Informações de Contato</h3>
              <p>Entre em contato conosco através dos canais abaixo</p>
            </div>

            <div className={styles.infoGrid}>
              {contactInfo.map((item, idx) => {
                const IconComponent = item.icon;
                const Content = (
                  <motion.div 
                    key={idx}
                    className={styles.infoCard}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: item.delay }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className={styles.infoIcon} style={{ background: `${item.color}15`, borderColor: item.color }}>
                      {typeof IconComponent === 'function' && !IconComponent.prototype?.render ? (
                        <IconComponent size={22} color={item.color} />
                      ) : (
                        <IconComponent size={22} strokeWidth={1.5} color={item.color} />
                      )}
                    </div>
                    <div className={styles.infoContent}>
                      <h4>{item.title}</h4>
                      <p>{item.info}</p>
                      <span className={styles.infoSub}>{item.sub}</span>
                    </div>
                    {item.link && (
                      <ArrowRight size={16} className={styles.infoArrow} color={item.color} />
                    )}
                  </motion.div>
                );

                return item.link ? (
                  <a 
                    key={idx} 
                    id={item.anchorId}
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    {Content}
                  </a>
                ) : (
                  Content
                );
              })}
            </div>

            <motion.div 
              className={styles.hoursCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Clock size={20} color="#ee9b00" />
              <div className={styles.hoursContent}>
                <strong>Horário de Atendimento</strong>
                <span>Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            id="contact-form"
            className={styles.formSection}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.formHeader}>
              <h3>Envie uma mensagem</h3>
              <p>Responderemos o mais breve possível</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label>Seu nome</label>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                  name="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label>Seu e-mail</label>
                </div>
                
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                  name="phone"
                    placeholder=" "
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label>Seu telefone</label>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder=" "
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label>Sua mensagem</label>
              </div>
              
              <motion.button 
                type="submit" 
                className={styles.submitBtn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? (
                  <span className={styles.loading}>Enviando...</span>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>

              {submitNotice && (
                <motion.div 
                  className={submitted ? styles.successMessage : styles.noticeMessage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {submitted ? <CheckCircle size={20} /> : <Mail size={20} />}
                  <span>{submitNotice}</span>
                </motion.div>
              )}

              {submitError && (
                <motion.div 
                  className={styles.errorMessage}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <AlertCircle size={20} />
                  {submitError}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
