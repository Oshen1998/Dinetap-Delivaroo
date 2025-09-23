import EncryptedStorage from 'react-native-encrypted-storage';
import { create } from 'zustand';
import { login } from '../services/authApi';
import { User } from '@react-native-google-signin/google-signin';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  loading: boolean;
  tokens: Tokens;
  user: User | null;
  setTokens: (tokens: Tokens) => Promise<void>;
  clearTokens: () => Promise<void>;
  clearUser: () => Promise<void>;
  loadTokens: () => Promise<void>;
  loginUser: () => Promise<Tokens>;
  setUserDetails: (data: User) => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  loading: false,
  user: null,

  setTokens: async (tokens: Tokens) => {
    await EncryptedStorage.setItem('authTokens', JSON.stringify(tokens));
    set({ tokens });
  },

  clearTokens: async () => {
    await EncryptedStorage.removeItem('authTokens');
    set({
      tokens: {
        accessToken: '',
        refreshToken: '',
      },
    });
  },

  clearUser: async () => {
    set({
      user: null,
    });
  },

  loadTokens: async () => {
    const stored = await EncryptedStorage.getItem('authTokens');
    if (stored) {
      set({ tokens: JSON.parse(stored) });
    }
  },

  setUserDetails: async (data: User) => {
    set({
      user: data,
    });
  },

  loginUser: async (): Promise<Tokens> => {
    set({ loading: true });
    try {
      const data = await login();

      await get().setTokens(data);
      await get().loadTokens();
    } catch (err) {
      console.log('Login Failed', err);
    } finally {
      set({ loading: false });
      return get().tokens;
    }
  },
}));
