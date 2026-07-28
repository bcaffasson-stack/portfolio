import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../data/content';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="relative py-24 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow justify-center before:hidden">
            <i className="fas fa-cogs mr-2"></i>
            Compétences
          </span>
          <h2 className="section-title">
            Ce que je sais{' '}
            <em className="text-primary-500">construire</em>
          </h2>
          <p className="section-subtitle">
            Un socle technique en construction, nourri par la pratique de projets académiques et de programmes de renforcement.
          </p>
        </motion.div>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Effet de fond au hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Contenu */}
              <div className="relative z-10">
                {/* En-tête de la carte */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        rotate: hoveredSkill === skill.name ? 360 : 0,
                        scale: hoveredSkill === skill.name ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="relative"
                    >
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-300"
                        style={{ 
                          backgroundColor: `${skill.color}15`, 
                          color: skill.color,
                          boxShadow: hoveredSkill === skill.name ? `0 0 30px ${skill.color}40` : ''
                        }}
                      >
                        <i className={skill.icon}></i>
                      </div>
                      {/* Indicateur de niveau */}
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md">
                        <div 
                          className="w-3 h-3 rounded-full"
                          style={{ 
                            background: `conic-gradient(${skill.color} ${skill.level * 3.6}deg, transparent 0deg)`,
                            transform: 'rotate(-90deg)'
                          }}
                        ></div>
                      </div>
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                        {skill.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <i 
                              key={star}
                              className={`fas fa-star text-[10px] ${
                                star <= Math.ceil(skill.level / 20) 
                                  ? 'text-yellow-400' 
                                  : 'text-gray-300 dark:text-gray-600'
                              }`}
                            ></i>
                          ))}
                        </div>
                        <span className="text-xs font-semibold" style={{ color: skill.color }}>
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Icône expand */}
                  <motion.div
                    animate={{ rotate: selectedSkill === skill.name ? 180 : 0 }}
                    className="text-gray-400 group-hover:text-primary-500 transition-colors"
                  >
                    <i className="fas fa-chevron-down"></i>
                  </motion.div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Barre de progression */}
                <div className="relative mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Maîtrise
                    </span>
                    <span className="text-xs font-bold" style={{ color: skill.color }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full rounded-full relative overflow-hidden"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                        boxShadow: `0 0 20px ${skill.color}40`
                      }}
                    >
                      {/* Effet de brillance */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-500 transition-all duration-300 border border-gray-200 dark:border-gray-600"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Détails supplémentaires (expand) */}
                <AnimatePresence>
                  {selectedSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="grid grid-cols-2 gap-3">
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <div className="text-lg font-bold" style={{ color: skill.color }}>
                            {skill.level}%
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Niveau</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <div className="text-lg font-bold text-primary-500">
                            {skill.tags.length}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Outils</div>
                        </div>
                      </div>
                      
                      <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                        <i className="fas fa-check-circle text-green-500 mr-1"></i>
                        Compétence validée par des projets académiques
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistiques globales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: 'fa-code', value: '6', label: 'Domaines', color: 'from-blue-500 to-blue-600' },
            { icon: 'fa-tools', value: '20+', label: 'Outils maîtrisés', color: 'from-green-500 to-green-600' },
            { icon: 'fa-project-diagram', value: 'Multiples', label: 'Projets réalisés', color: 'from-purple-500 to-purple-600' },
            { icon: 'fa-chart-line', value: '85%', label: 'Niveau moyen', color: 'from-orange-500 to-orange-600' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                <i className={`fas ${stat.icon} text-white text-lg`}></i>
              </div>
              <div className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}