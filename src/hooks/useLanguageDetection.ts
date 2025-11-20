import { useState, useEffect } from 'react';

export type Language = 'fr' | 'en';

export function useLanguageDetection() {
  const [language, setLanguage] = useState<Language>('fr');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    detectLanguage();
  }, []);

  const detectLanguage = async () => {
    try {
      // Vérifier d'abord si une langue est déjà sauvegardée
      const savedLanguage = localStorage.getItem('dora-language') as Language | null;
      if (savedLanguage) {
        setLanguage(savedLanguage);
        setIsLoading(false);
        return;
      }

      // Détecter la langue du navigateur (la diaspora ivoirienne est présente partout)
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith('fr') ? 'fr' : 'en';
      
      setLanguage(detectedLang);
      localStorage.setItem('dora-language', detectedLang);
    } catch (error) {
      // En cas d'erreur, utiliser le français par défaut
      setLanguage('fr');
      localStorage.setItem('dora-language', 'fr');
    } finally {
      setIsLoading(false);
    }
  };

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('dora-language', newLanguage);
  };

  return { language, changeLanguage, isLoading };
}