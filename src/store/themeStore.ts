import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { IColor } from "../constants/interface";
import { DarkColors, LightColors } from "../themes/colors";
import { API_KEY } from "@env";

type ThemeStore = {
  isDarkMode: boolean;
  Colors: IColor;
  switchTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      isDarkMode: false,
      Colors: LightColors,
      switchTheme: () => {
        const { isDarkMode } = get();
        set({
          isDarkMode: !isDarkMode,
          Colors: !isDarkMode ? DarkColors : LightColors,
        });
      },
    }),
    {
      name: API_KEY || "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
