import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const newTheme = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT;

  const toggleTheme = () => {
    if (setTheme) {
      setTheme(newTheme);
    }

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || newTheme;

  return { theme: theme as Theme, toggleTheme };
}
