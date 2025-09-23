import { useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import strings from '../i18n';

export const useDefaultHooks = () => {
  const { language } = useAppStore();


  useEffect(() => {
    strings.setLanguage(language);
  }, [language]);
};
