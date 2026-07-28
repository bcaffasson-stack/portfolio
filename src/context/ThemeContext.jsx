import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // État du mode sombre
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      // Détecter la préférence du système
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      console.warn('Erreur lors de la lecture du thème:', error);
      return false;
    }
  });

  // État de transition
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Appliquer le thème
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      
      const root = document.documentElement;
      const body = document.body;

      if (darkMode) {
        root.classList.add('dark');
        body.classList.add('dark');
        // Mise à jour des meta tags
        updateMetaThemeColor('#111827'); // gray-900
      } else {
        root.classList.remove('dark');
        body.classList.remove('dark');
        updateMetaThemeColor('#ffffff');
      }

      // Déclencher l'animation de transition
      setIsTransitioning(true);
      const timer = setTimeout(() => setIsTransitioning(false), 300);
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.warn('Erreur lors de la sauvegarde du thème:', error);
    }
  }, [darkMode]);

  // Écouter les changements de préférence système
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Ne changer que si l'utilisateur n'a pas explicitement choisi un thème
      const savedPreference = localStorage.getItem('darkMode');
      if (savedPreference === null) {
        setDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Mettre à jour la couleur du thème dans les meta tags
  const updateMetaThemeColor = (color) => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'theme-color';
      document.head.appendChild(meta);
    }
    meta.content = color;
  };

  // Basculer le thème
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev);
  }, []);

  // Définir un thème spécifique
  const setTheme = useCallback((isDark) => {
    setDarkMode(isDark);
  }, []);

  // Réinitialiser au thème système
  const resetToSystemTheme = useCallback(() => {
    localStorage.removeItem('darkMode');
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  // Valeur du contexte
  const value = {
    darkMode,
    toggleDarkMode,
    setTheme,
    resetToSystemTheme,
    isTransitioning,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`theme-transition ${isTransitioning ? 'is-transitioning' : ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Hook personnalisé pour utiliser le thème
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error(
      'useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider.\n' +
      'Assurez-vous que votre application est enveloppée dans <ThemeProvider>.\n' +
      'Exemple :\n' +
      '  <ThemeProvider>\n' +
      '    <App />\n' +
      '  </ThemeProvider>'
    );
  }
  
  return context;
}

// Hook pour obtenir uniquement l'état du mode sombre
export function useDarkMode() {
  const { darkMode } = useTheme();
  return darkMode;
}

// Hook pour obtenir uniquement la fonction de basculement
export function useToggleDarkMode() {
  const { toggleDarkMode } = useTheme();
  return toggleDarkMode;
}