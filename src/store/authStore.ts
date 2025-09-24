import EncryptedStorage from 'react-native-encrypted-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { login } from '../services/authApi';
import { User } from '@react-native-google-signin/google-signin';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  loading: boolean;
  isGoogleSigIn: boolean;
  tokens: Tokens;
  user: User | null;
  setTokens: (tokens: Tokens) => void;
  clearTokens: () => void;
  clearUser: () => void;
  setIsSignin: (flag: boolean) => void;
  loginUser: () => Promise<Tokens>;
  setUserDetails: (data: User) => void;
}

// Custom storage adapter for EncryptedStorage
const encryptedStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return await EncryptedStorage.getItem(name);
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await EncryptedStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await EncryptedStorage.removeItem(name);
  },
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      tokens: {
        accessToken: '',
        refreshToken: '',
      },
      loading: false,
      isGoogleSigIn: false,
      user: null,

      setTokens: (tokens: Tokens) => {
        set({ tokens });
      },

      clearTokens: () => {
        set({
          tokens: {
            accessToken: '',
            refreshToken: '',
          },
        });
      },

      clearUser: () => {
        set({
          user: null,
          isGoogleSigIn: false,
        });
      },

      setIsSignin: (flag: boolean) => {
        set({
          isGoogleSigIn: flag,
        });
      },

      setUserDetails: (data: User) => {
        set({
          user: data,
        });
      },

      loginUser: async (): Promise<Tokens> => {
        set({ loading: true });
        try {
          const data = await login();
          get().setTokens(data);
          return data;
        } catch (err) {
          console.log('Login Failed', err);
          return get().tokens;
        } finally {
          set({ loading: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => encryptedStorage),
      partialize: state => ({ tokens: state.tokens }),
    },
  ),
);
