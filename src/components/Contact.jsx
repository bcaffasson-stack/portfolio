import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contactCards } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_iurz4x6',
      'template_tsft59o',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'KSo-EUMIVDr4uJvM-'
    )
      .then(() => {
        alert('✅ Message envoyé avec succès !\n\nMerci de m\'avoir contacté. Je vous répondrai dans les plus brefs délais.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Erreur EmailJS :', error);
        alert('❌ Une erreur est survenue lors de l\'envoi. Merci de réessayer ou de me contacter directement par email.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="eyebrow justify-center before:hidden">
            <i className="fas fa-paper-plane mr-2"></i>
            Contact
          </span>
          <h2 className="section-title">
            <span className="gradient-text">Construisons quelque chose</span>
            <br />
            <em className="text-gray-600 dark:text-gray-400">ensemble</em>
          </h2>
          <p className="section-subtitle">
            Une question, un projet, une idée à partager ? N'hésitez pas à me contacter
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card p-8">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <i className="fas fa-address-card text-primary-500 mr-3"></i>
                Mes Coordonnées
              </h3>
              
              <div className="space-y-4">
                {contactCards.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    {item.href ? (
                      /* ✅ BALISE <a> CORRIGÉE */
                      <a
                        href={item.href}
                        className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <i className={`fas ${item.icon} text-white text-lg`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors truncate">
                            {item.value}
                          </p>
                        </div>
                        <i className="fas fa-arrow-right text-gray-400 group-hover:text-primary-500 transition-all transform group-hover:translate-x-1"></i>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <i className={`fas ${item.icon} text-white text-lg`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">
                            {item.label}
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white truncate">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  Retrouvez-moi sur :
                </p>
                <div className="flex space-x-4">
                  {[
                    { name: 'github', icon: 'fa-github', url: 'https://github.com/bcaffasson-stack', color: 'hover:bg-gray-800' },
                    { name: 'linkedin', icon: 'fa-linkedin', url: 'https://linkedin.com/in/belco-caffasson', color: 'hover:bg-blue-700' },
                    { name: 'twitter', icon: 'fa-twitter', url: 'https://twitter.com/bcaffasson', color: 'hover:bg-sky-500' },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                    >
                      <i className={`fab ${social.icon} text-xl`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-green-700 dark:text-green-400">Ouvert aux opportunités</p>
                  <p className="text-xs text-green-600 dark:text-green-500">Stages, projets freelance et collaborations</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card p-8 space-y-6">
              <h3 className="text-xl font-display font-bold text-gray-900 dark:text-white mb-2 flex items-center">
                <i className="fas fa-envelope text-primary-500 mr-3"></i>
                Envoyez-moi un message
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Je vous répondrai dans les plus brefs délais</p>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <i className="fas fa-user mr-2 text-primary-500"></i>Nom complet
                  </label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Votre nom complet" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <i className="fas fa-at mr-2 text-primary-500"></i>Email
                  </label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <i className="fas fa-comment mr-2 text-primary-500"></i>Message
                  </label>
                  <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-400"
                    placeholder="Décrivez votre projet ou votre message..."></textarea>
                </div>
              </div>
              <motion.button type="submit" disabled={isSubmitting}
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className={`w-full py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}>
                {isSubmitting ? (
                  <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}><i className="fas fa-spinner"></i></motion.div><span>Envoi en cours...</span></>
                ) : (
                  <><i className="fas fa-paper-plane"></i><span>Envoyer le message</span><i className="fas fa-arrow-right"></i></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-400 dark:text-gray-500">
            <div className="flex items-center space-x-2"><i className="fas fa-shield-alt text-green-500"></i><span className="text-sm">Réponse rapide</span></div>
            <div className="flex items-center space-x-2"><i className="fas fa-lock text-green-500"></i><span className="text-sm">Données sécurisées</span></div>
            <div className="flex items-center space-x-2"><i className="fas fa-clock text-green-500"></i><span className="text-sm">Sous 24h</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}