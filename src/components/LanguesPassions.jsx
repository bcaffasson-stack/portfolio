import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { languages, passions } from '../data/content';

function LanguageBar({ lang, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-8 last:mb-0 group"
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white text-sm shadow-md group-hover:scale-110 transition-transform duration-300">
            <i className="fas fa-language"></i>
          </div>
          <strong className="font-semibold text-gray-900 dark:text-white text-lg">
            {lang.name}
          </strong>
        </div>
        <span className="font-mono text-sm text-primary-500 font-semibold bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
          {lang.level}
        </span>
      </div>
      
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, #3b82f6, #2563eb, #1d4ed8)',
            width: visible ? `${lang.percentage}%` : '0%',
          }}
          initial={{ width: '0%' }}
          animate={{ width: visible ? `${lang.percentage}%` : '0%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
        </motion.div>
      </div>
      
      <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
        <span>Débutant</span>
        <span>Intermédiaire</span>
        <span>Avancé</span>
        <span>Natif</span>
      </div>
    </motion.div>
  );
}

function PassionCard({ passion, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, x: 8 }}
      className="group flex items-center gap-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
    >
      <div className="relative">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <i className={passion.icon}></i>
        </div>
        <div className="absolute -inset-1 bg-primary-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
      </div>
      
      <div className="flex-1">
        <h4 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-primary-500 transition-colors">
          {passion.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {passion.description}
        </p>
      </div>
      
      <div className="text-gray-400 group-hover:text-primary-500 transition-colors transform group-hover:translate-x-1 transition-transform">
        <i className="fas fa-arrow-right"></i>
      </div>
    </motion.div>
  );
}

export default function LanguesPassions() {
  return (
    <section className="relative py-24 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Section Langues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <span className="eyebrow">
                <i className="fas fa-globe mr-2"></i>
                Langues
              </span>
              <h2 className="section-title">
                Communiquer{' '}
                <em className="text-primary-500">sans frontières</em>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                La maîtrise des langues est essentielle dans le monde du développement. 
                Voici mes compétences linguistiques.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              {languages.map((lang, index) => (
                <LanguageBar key={lang.name} lang={lang} index={index} />
              ))}
              
              {/* Statistique rapide */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 grid grid-cols-3 gap-4 text-center"
              >
                <div>
                  <div className="text-2xl font-display font-bold text-primary-500">3</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Langues</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary-500">85%</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Moyenne</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-primary-500">B2</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Niveau min</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Section Passions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <span className="eyebrow">
                <i className="fas fa-heart mr-2"></i>
                Passions
              </span>
              <h2 className="section-title">
                En dehors{' '}
                <em className="text-primary-500">du code</em>
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                Mes centres d'intérêt qui m'inspirent et nourrissent ma créativité au quotidien.
              </p>
            </div>
            
            <div className="space-y-4">
              {passions.map((passion, index) => (
                <PassionCard key={passion.title} passion={passion} index={index} />
              ))}
            </div>
            
            {/* Citation inspirante */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl border border-primary-200 dark:border-primary-800"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary-500 opacity-50">"</div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-sm">
                    La programmation est un art qui mélange créativité et logique. 
                    Chaque ligne de code est une opportunité d'apprendre et de créer quelque chose d'unique.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs">
                      <i className="fas fa-quote-right"></i>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      Ma philosophie de développement
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
