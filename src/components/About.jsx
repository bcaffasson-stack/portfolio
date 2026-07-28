import { motion } from 'framer-motion';
import { personalInfo, aboutText, aboutMeta } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow justify-center before:hidden">
            <i className="fas fa-user-circle mr-2"></i>
            Profil
          </span>
          <h2 className="section-title">
            <span className="gradient-text">À Propos de Moi</span>
          </h2>
          <p className="section-subtitle">
            Étudiant en informatique passionné par le développement web
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ✅ PHOTO DE PROFIL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="relative group">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><div class="text-center text-white"><i class="fas fa-user-circle text-8xl opacity-80 mb-4"></i><p class="text-xl font-display font-bold opacity-90">' + personalInfo.shortName + '</p></div></div>';
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
              </div>
              
              {/* Badge flottant */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-700 shadow-xl rounded-2xl px-6 py-4 border border-gray-100 dark:border-gray-600"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Disponible pour stage
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contenu texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-4">
                {personalInfo.title}
              </h3>
              
              <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mb-6"></div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic border-l-4 border-primary-500 pl-4">
                {aboutText.lead}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutText.p1}
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutText.p2}
              </p>
            </div>

            {/* Métadonnées */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {aboutMeta.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className={`fas ${item.icon} text-white text-lg`}></i>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white truncate">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ✅ BOUTON CV */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.a
                href={personalInfo.cvLink}
                download="CV_Belco_Caffasson_RAHARIVONJY.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <i className="fas fa-download"></i>
                <span>Télécharger mon CV</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {[
            { icon: 'fa-graduation-cap', title: 'Formation', value: 'Licence en cours', desc: 'ENI Fianarantsoa' },
            { icon: 'fa-code', title: 'Projets', value: 'Multiples', desc: 'Projets académiques' },
            { icon: 'fa-language', title: 'Langues', value: '03', desc: 'Malagasy, Français, Anglais' },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                <i className={`fas ${stat.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {stat.title}
              </h4>
              <p className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}