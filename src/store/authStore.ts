import EncryptedStorage from 'react-native-encrypted-storage';
import { create } from 'zustand';
import { login } from '../services/authApi';

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  loading: boolean;
  tokens: Tokens;
  setTokens: (tokens: Tokens) => Promise<void>;
  clearTokens: () => Promise<void>;
  loadTokens: () => Promise<void>;
  loginUser: () => Promise<Tokens>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  tokens: {
    accessToken: '',
    refreshToken: '',
  },
  loading: false,

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

  loadTokens: async () => {
    const stored = await EncryptedStorage.getItem('authTokens');
    if (stored) {
      set({ tokens: JSON.parse(stored) });
    }
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
