import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { href: '#home', label: 'Accueil', icon: 'fa-home' },
    { href: '#about', label: 'Profil', icon: 'fa-user' },
    { href: '#skills', label: 'Compétences', icon: 'fa-cogs' },
    { href: '#projects', label: 'Projets', icon: 'fa-folder' },
    { href: '#formations', label: 'Formations', icon: 'fa-graduation-cap' },
    { href: '#contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  const socialLinks = [
    { name: 'github', icon: 'fa-github', url: 'https://github.com/bcaffasson-stack', color: 'hover:text-gray-300' },
    { name: 'linkedin', icon: 'fa-linkedin', url: 'https://linkedin.com/in/belco-caffasson', color: 'hover:text-blue-400' },
    { name: 'twitter', icon: 'fa-twitter', url: 'https://twitter.com/bcaffasson', color: 'hover:text-sky-400' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16 pb-8">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Section À propos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-display font-bold text-white">
                  {personalInfo.shortName.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold gradient-text">
                  {personalInfo.shortName}
                </h3>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {personalInfo.title} — Passionné par la création d'applications web modernes et innovantes.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vue.js', 'PHP', 'Python', 'MySQL'].map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Section Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-bold mb-6 flex items-center">
              <i className="fas fa-link text-primary-500 mr-3"></i>
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  {/* ✅ BALISE <a> CORRIGÉE */}
                  <a
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-primary-400 transition-all duration-300"
                  >
                    <i className={`fas ${link.icon} w-5 text-xs mr-3 text-primary-500 group-hover:scale-110 transition-transform`}></i>
                    <span className="relative">
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <i className="fas fa-chevron-right text-[10px] ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-bold mb-6 flex items-center">
              <i className="fas fa-address-book text-primary-500 mr-3"></i>
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                {/* ✅ BALISE <a> CORRIGÉE */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-start space-x-3 text-gray-400 hover:text-primary-400 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <i className="fas fa-envelope text-sm"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="text-sm font-medium break-all">{personalInfo.email}</p>
                  </div>
                </a>
              </li>
              <li>
                {/* ✅ BALISE <a> CORRIGÉE */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="group flex items-start space-x-3 text-gray-400 hover:text-primary-400 transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <i className="fas fa-phone text-sm"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Téléphone</p>
                    <p className="text-sm font-medium">{personalInfo.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="group flex items-start space-x-3 text-gray-400">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <i className="fas fa-location-dot text-sm"></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Localisation</p>
                    <p className="text-sm font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Section Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-display font-bold mb-6 flex items-center">
              <i className="fas fa-share-alt text-primary-500 mr-3"></i>
              Suivez-moi
            </h4>
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <i className={`fab ${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
            <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
              <p className="text-sm text-gray-400 mb-2 flex items-center">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Disponible pour :
              </p>
              <ul className="space-y-1 text-xs text-gray-500">
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2 text-[10px]"></i>Stages en entreprise</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2 text-[10px]"></i>Projets freelance</li>
                <li className="flex items-center"><i className="fas fa-check text-green-500 mr-2 text-[10px]"></i>Collaborations</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors">Politique de confidentialité</a>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300"
                aria-label="Retour en haut"
              >
                <i className="fas fa-arrow-up"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}