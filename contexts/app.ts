import createSelectors from '@/utils/createSelectors';
import { create } from 'zustand';
import AsyncStorage from "@react-native-async-storage/async-storage"

export type Theme = "light" | "dark"

interface AppStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const useAppBase = create<AppStore>()((set) => ({
  theme: 'light',
  setTheme: (theme: Theme) => {
    set(() => {
      AsyncStorage.setItem("theme", theme)
      return { theme }
    });
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light'
      console.log('newTheme', newTheme)
      AsyncStorage.setItem("theme", newTheme)
      return { theme: newTheme }
    });
  },
}));

const useApp = createSelectors(useAppBase);

export default useApp;