import { create } from 'zustand';
import strings from '../i18n';

export interface AppState {
  language: string;
  setLanguage: (tokens: string) => Promise<void>;
}

export const useAppStore = create<AppState>((set) => ({
  language: 'en',

  setLanguage: async (languageType: string) => {
    console.log(languageType, 'languageType');
    
    set({ language: languageType });
    strings.setLanguage(languageType);
  },
}));
