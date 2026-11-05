import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const navItems = [
  {
    href: '#home',
    label: 'Home',
    previewLinks: [
      { href: '#home', label: 'Apresentação' },
      { href: '#contact-form', label: 'Orçamento' },
      { href: '#services', label: 'Serviços' },
    ],
  },
  {
    href: '#about',
    label: 'Sobre',
    previewLinks: [
      { href: '#about-mission', label: 'Missão' },
      { href: '#about-vision', label: 'Visão' },
      { href: '#about-values', label: 'Valores' },
      { href: '#about-expertise', label: 'Expertise' },
    ],
  },
  {
    href: '#services',
    label: 'Serviços',
    previewLinks: [
      { href: '#service-1', label: 'Projetos' },
      { href: '#service-2', label: 'Consultoria' },
      { href: '#service-3', label: 'Gestão de obras' },
      { href: '#service-8', label: 'Infraestrutura' },
    ],
  },
  {
    href: '#why',
    label: 'Diferenciais',
    previewLinks: [
      { href: '#why-expertise', label: 'Expertise' },
      { href: '#why-prazos', label: 'Prazos' },
      { href: '#why-qualidade', label: 'Qualidade' },
      { href: '#why-atendimento', label: 'Atendimento' },
    ],
  },
  {
    href: '#contact',
    label: 'Contato',
    previewLinks: [
      { href: '#contact-phone', label: 'Telefone' },
      { href: '#contact-email', label: 'E-mail' },
      { href: '#contact-location', label: 'Localização' },
      { href: '#contact-form', label: 'Mensagem' },
    ],
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setExpandedGroups({});
  };

  const handleNavigation = (event, href) => {
    event.preventDefault();
    closeMenu();

    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);

    if (!target) return;

    window.history.pushState(null, '', href);
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  const toggleDropdown = (label) => {
    setExpandedGroups((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#home" onClick={(event) => handleNavigation(event, '#home')}>
            {!logoError ? (
              <img 
                src="/images/[HORIZONTAL] BRANCO.png" 
                alt="Soluções Engenharia e Projetos"
                className={styles.logoImage}
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className={styles.logoText}>
                <span className={styles.logoSolucoes}>Soluções</span>
                <span className={styles.logoEngenharia}>Engenharia</span>
              </div>
            )}
          </a>
        </div>
        
        <button 
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleActive : ''}`} 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <div key={item.href} className={styles.navGroup}>
              <div className={styles.navGroupHeader}>
                <a
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  className={styles.navSectionLink}
                >
                  <span className={styles.navTitle}>{item.label}</span>
                </a>
                <button
                  type="button"
                  className={styles.navDropdownButton}
                  onClick={() => toggleDropdown(item.label)}
                  aria-label={`Abrir atalhos de ${item.label}`}
                  aria-expanded={Boolean(expandedGroups[item.label])}
                >
                  <ChevronDown
                    size={18}
                    strokeWidth={2.2}
                    className={`${styles.navDropdownIcon} ${expandedGroups[item.label] ? styles.navDropdownIconOpen : ''}`}
                  />
                </button>
              </div>
              <div
                className={`${styles.navPreviewList} ${expandedGroups[item.label] ? styles.navPreviewListOpen : ''}`}
                aria-label={`Atalhos de ${item.label}`}
              >
                {item.previewLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleNavigation(event, link.href)}
                    className={styles.navPreviewLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
