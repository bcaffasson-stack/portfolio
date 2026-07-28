import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/content';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(filter));

  // Fonction pour ouvrir un lien
  const openLink = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="animate-on-scroll">
          <h2 className="section-title">
            <span className="gradient-text">Projets</span>
          </h2>
          <p className="section-subtitle">
            Découvrez mes réalisations récentes
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            <i className="fas fa-th-large mr-2"></i>
            Tous
          </button>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tech
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="card overflow-hidden group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6">
                    <p className="text-white text-sm text-center font-medium">
                      Cliquez pour voir les détails
                    </p>
                    <div className="flex space-x-3">
                      {/* ✅ Bouton Code Source (GitHub) */}
                      {project.github ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLink(project.github);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                          title="Voir le code source"
                        >
                          <i className="fab fa-github"></i>
                          Code source
                        </button>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2 bg-gray-400/50 text-white rounded-full text-sm cursor-not-allowed" title="Code source non disponible">
                          <i className="fab fa-github"></i>
                          Privé
                        </span>
                      )}

                      {/* ✅ Bouton Démo (Site live) */}
                      {project.live ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openLink(project.live);
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                          title="Voir la démo en ligne"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Démo
                        </button>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2 bg-gray-400/50 text-white rounded-full text-sm cursor-not-allowed" title="Démo non disponible">
                          <i className="fas fa-external-link-alt"></i>
                          Non déployé
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Badge de date */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 shadow-lg">
                    {project.date}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded-full border border-primary-200 dark:border-primary-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Liens rapides (toujours visibles) */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    {/* Lien GitHub */}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        <i className="fab fa-github"></i>
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 cursor-not-allowed">
                        <i className="fab fa-github"></i>
                        <span>Code indisponible</span>
                      </span>
                    )}

                    <span className="text-gray-300 dark:text-gray-600">|</span>

                    {/* Lien Démo */}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs text-green-600 dark:text-green-400 hover:text-green-700 transition-colors font-medium"
                      >
                        <i className="fas fa-globe"></i>
                        <span>Démo en ligne</span>
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 cursor-not-allowed">
                        <i className="fas fa-globe"></i>
                        <span>Non déployé</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Détails étendus */}
                <AnimatePresence>
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-gray-200 dark:border-gray-700"
                    >
                      <div className="p-6 bg-gray-50 dark:bg-gray-700/50">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Détails du projet
                        </h4>
                        <ul className="space-y-2">
                          {project.details?.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <i className="fas fa-check-circle text-primary-500 mt-0.5 text-xs"></i>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Galerie pour le projet Routage IP */}
                        {project.gallery && project.gallery.length > 0 && (
                          <div className="mt-4">
                            <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                              Captures d'écran
                            </h5>
                            <div className="grid grid-cols-3 gap-2">
                              {project.gallery.map((img, i) => (
                                <a
                                  key={i}
                                  href={img.url || img}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 hover:border-primary-500 transition-colors"
                                >
                                  <img
                                    src={img.url || img}
                                    alt={img.alt || `Capture ${i + 1}`}
                                    className="w-full h-20 object-cover hover:scale-110 transition-transform"
                                  />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <i className="fas fa-search text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Aucun projet trouvé pour cette technologie
            </p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 text-primary-500 hover:text-primary-600 font-medium"
            >
              Voir tous les projets
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}