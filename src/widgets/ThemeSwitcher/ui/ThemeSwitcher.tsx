import AppButton, { ButtonTheme } from '@shared/ui/AppButton/AppButton';
import ThemeDark from '@shared/assets/icons/theme-dark.svg';
import ThemeLight from '@shared/assets/icons/theme-light.svg';
import { classNames } from '@shared/lib/classNames';
import { Theme, useTheme } from '@app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <AppButton
      onClick={toggleTheme}
      className={classNames(cls.ThemeSwitcher, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <ThemeDark /> : <ThemeLight />}
    </AppButton>
  );
};

export default ThemeSwitcher;
