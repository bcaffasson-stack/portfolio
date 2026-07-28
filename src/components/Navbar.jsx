import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data/content';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { darkMode, toggleDarkMode } = useTheme();

  // Détection du scroll et de la section active
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sectionIds = ['home', 'about', 'skills', 'projects', 'formations', 'contact'];
      let currentSection = 'home';
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêcher le défilement quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Fermer le menu mobile lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fonction pour scroller vers une section
  const scrollToSection = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const sectionId = href.replace('#', '');
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, isOpen ? 300 : 0);
  }, [isOpen]);

  // Icônes pour chaque section
  const getIcon = (href) => {
    const icons = {
      '#home': 'fa-home',
      '#about': 'fa-user',
      '#skills': 'fa-cogs',
      '#projects': 'fa-folder-open',
      '#formations': 'fa-graduation-cap',
      '#contact': 'fa-envelope',
    };
    return icons[href] || 'fa-circle';
  };

  // Classes de la navbar
  const navClasses = scrolled
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50 dark:border-gray-700/50'
    : 'bg-white dark:bg-gray-900 shadow-md';

  // Couleur du texte du logo
  const logoTextClass = 'text-gray-900 dark:text-white';

  // Couleur des liens
  const linkDefaultClass = 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* ========== LOGO AVEC PHOTO ========== */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              {/* ✅ PHOTO À LA PLACE DU "B" */}
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300 ring-2 ring-primary-400/50 group-hover:ring-primary-500">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.shortName}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback : lettre B si la photo ne charge pas
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center"><span class="text-white font-display font-bold text-lg">B</span></div>';
                  }}
                />
              </div>
              <div className="absolute -inset-0.5 bg-primary-500 rounded-xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-300" />
            </div>
            <span className={`font-display font-bold text-lg hidden sm:block ${logoTextClass}`}>
              {personalInfo.shortName}
            </span>
          </a>

          {/* ========== MENU DESKTOP ========== */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                      : linkDefaultClass
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            
            {/* Séparateur */}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
            
            {/* Bouton Contact */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <i className="fas fa-paper-plane text-xs" />
              Contact
            </a>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="ml-2 p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label={darkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`} />
            </motion.button>
          </div>

          {/* ========== BOUTONS MOBILES ========== */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300"
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`} />
            </button>
            
            {/* Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-300"
              aria-label="Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="block w-full h-0.5 bg-current rounded-full origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                  className="block w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="block w-full h-0.5 bg-current rounded-full origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* ========== MENU MOBILE ========== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 md:hidden bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto"
            >
              <div className="p-6 pt-8">
                {/* ✅ PROFIL AVEC PHOTO DANS LE MENU MOBILE */}
                <div className="flex items-center gap-4 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg ring-2 ring-primary-400/50 flex-shrink-0">
                    <img
                      src={personalInfo.photo}
                      alt={personalInfo.shortName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center"><span class="text-white font-bold text-lg">B</span></div>';
                      }}
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {personalInfo.shortName}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {personalInfo.title}
                    </div>
                  </div>
                </div>

                {/* Liens de navigation */}
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const sectionId = link.href.substring(1);
                    const isActive = activeSection === sectionId;
                    
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 shadow-sm'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        <i className={`fas ${getIcon(link.href)} w-5 text-center`} />
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="mobileActive"
                            className="ml-auto w-1.5 h-1.5 bg-primary-500 rounded-full"
                          />
                        )}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Bouton Contact Mobile */}
                <motion.a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/25 hover:shadow-primary-500/50 transition-all duration-300"
                >
                  <i className="fas fa-paper-plane" />
                  Me contacter
                </motion.a>

                {/* Coordonnées */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl space-y-3"
                >
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                    <i className="fas fa-envelope w-4" />
                    <span className="truncate">{personalInfo.email}</span>
                  </a>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">
                    <i className="fas fa-phone w-4" />
                    <span>{personalInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <i className="fas fa-location-dot w-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}