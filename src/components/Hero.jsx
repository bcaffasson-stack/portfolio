import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export default function Hero() {
  const socialLinks = [
    { icon: 'fa-github', href: 'https://github.com/bcaffasson-stack', label: 'GitHub' },
    { icon: 'fa-linkedin', href: 'https://linkedin.com/in/belco-caffasson', label: 'LinkedIn' },
    { icon: 'fa-twitter', href: 'https://twitter.com/bcaffasson', label: 'Twitter' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Fond animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%233b82f620' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-black/50"></div>
      </div>

      {/* Éléments flottants */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary-500 rounded-full opacity-20"
        animate={{ y: [0, -30, 0], scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-600 rounded-full opacity-10"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1], rotate: [360, 270, 180, 90, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-1/2 left-20 w-16 h-16 bg-primary-400 rounded-full opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -20, 0], scale: [1, 0.8, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-40 right-40 w-4 h-4 bg-primary-300 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      />
      
      <motion.div
        className="absolute bottom-40 left-40 w-3 h-3 bg-primary-200 rounded-full"
        animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ✅ PHOTO DE PROFIL */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6 relative"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 shadow-2xl animate-glow">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center"><i class="fas fa-user text-5xl text-white"></i></div>';
                  }}
                />
              </div>
              
              {/* Badge de disponibilité */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-800 rounded-full px-4 py-1.5 shadow-xl border-2 border-primary-500"
              >
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                    Disponible
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Localisation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 mb-4 text-sm text-gray-500 dark:text-gray-400"
          >
            <i className="fas fa-map-marker-alt text-primary-500"></i>
            <span>{personalInfo.location}</span>
          </motion.div>

          {/* Nom */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-2 px-2"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-500 to-blue-600 dark:from-primary-400 dark:via-primary-300 dark:to-blue-400">
              {personalInfo.name}
            </span>
          </motion.h1>

          {/* Rôle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
          >
            <span className="inline-flex items-center gap-3 bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-full">
              <i className="fas fa-terminal text-primary-500"></i>
              <span className="font-mono">{personalInfo.title}</span>
              <span className="w-2 h-5 bg-primary-500 animate-pulse rounded-full"></span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            {personalInfo.description}
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <i className="fas fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
              <span>Me contacter</span>
            </motion.a>
            
            {/* ✅ BOUTON CV */}
            <motion.a
              href={personalInfo.cvLink}
              download="CV_Belco_Caffasson_RAHARIVONJY.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-full font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <i className="fas fa-download group-hover:translate-y-1 transition-transform"></i>
              <span>Télécharger CV</span>
            </motion.a>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
          >
            {personalInfo.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="group relative"
                aria-label={social.label}
              >
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-500 hover:text-primary-500 transition-colors shadow-lg hover:shadow-xl">
                  <i className={`fab ${social.icon} text-xl`}></i>
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Indicateur de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-xs text-gray-400 dark:text-gray-500 font-medium tracking-widest uppercase">
              Découvrir
            </span>
            <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-primary-500 rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}