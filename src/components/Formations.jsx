import { motion } from 'framer-motion';
import { formations } from '../data/content';

export default function Formations() {
  return (
    <section id="formations" className="relative py-20 md:py-28 overflow-hidden">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-gray-800">
        {/* Motif de fond */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.14em] uppercase text-primary-400 font-medium mb-4">
            <span className="w-8 h-[1px] bg-primary-400"></span>
            <i className="fas fa-graduation-cap"></i>
            Formations & Certifications
            <span className="w-8 h-[1px] bg-primary-400"></span>
          </span>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Un parcours{' '}
            <em className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
              en progrès
            </em>
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            De la licence en informatique aux formations complémentaires en sécurité, anglais et bureautique.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Ligne verticale */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-transparent transform md:-translate-x-px"></div>

          <div className="space-y-12">
            {formations.map((formation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la timeline */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-500 rounded-full border-4 border-gray-900 transform -translate-x-1/2 mt-6 z-10 shadow-lg shadow-primary-500/50"></div>

                {/* Carte de formation */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    {/* Date */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <i className="fas fa-calendar-alt text-white text-sm"></i>
                      </div>
                      <span className="font-mono text-xs text-primary-400 tracking-wider">
                        {formation.date}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                      {formation.title}
                    </h3>

                    {/* Organisation */}
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <i className="fas fa-building text-primary-500 text-sm"></i>
                      <span className="text-sm">{formation.org}</span>
                    </div>

                    {/* Description */}
                    {formation.description && (
                      <p className="text-gray-300 leading-relaxed text-sm mb-4">
                        {formation.description}
                      </p>
                    )}

                    {/* Liste de détails */}
                    {formation.details && (
                      <ul className="space-y-2 mb-4">
                        {formation.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <i className="fas fa-check-circle text-primary-500 mt-1 text-xs"></i>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Badge de certification */}
                    {formation.badge && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                        <i className="fas fa-medal text-green-400 text-sm"></i>
                        <span className="text-xs font-medium text-green-400">
                          {formation.badge}
                        </span>
                      </div>
                    )}

                    {/* Effet de brillance au hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/10 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistiques de formation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: 'fa-graduation-cap', value: '5', label: 'Formations', color: 'from-blue-500 to-blue-600' },
            { icon: 'fa-certificate', value: '2', label: 'Certifications', color: 'from-green-500 to-green-600' },
            { icon: 'fa-clock', value: '2024-2026', label: 'Période', color: 'from-purple-500 to-purple-600' },
            { icon: 'fa-globe', value: '3', label: 'Villes', color: 'from-orange-500 to-orange-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <i className={`fas ${stat.icon} text-white text-lg`}></i>
              </div>
              <div className="text-2xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}