import EncryptedStorage from "react-native-encrypted-storage";
import { create } from "zustand";

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

export interface AuthState {
  tokens: Tokens | null;
  setTokens: (tokens: Tokens) => Promise<void>;
  clearTokens: () => Promise<void>;
  loadTokens: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  tokens: null,

  setTokens: async (tokens: Tokens) => {
    await EncryptedStorage.setItem("authTokens", JSON.stringify(tokens));
    set({ tokens });
  },

  clearTokens: async () => {
    await EncryptedStorage.removeItem("authTokens");
    set({ tokens: null });
  },

  loadTokens: async () => {
    const stored = await EncryptedStorage.getItem("authTokens");
    if (stored) {
      set({ tokens: JSON.parse(stored) });
    }
  },
}));
