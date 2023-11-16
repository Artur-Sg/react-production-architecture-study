import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  let newTheme: Theme = Theme.DEFAULT;

  const toggleTheme = () => {
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.DEFAULT;
        break;
      case Theme.DEFAULT:
        newTheme = Theme.MINT;
        break;
      case Theme.MINT:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.DEFAULT;
    }

    setTheme?.(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  document.body.className = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || newTheme;

  return { theme: theme || Theme.DEFAULT, toggleTheme };
}
