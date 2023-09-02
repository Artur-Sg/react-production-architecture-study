import { memo } from 'react';
import AppButton, { ButtonTheme } from '@shared/ui/AppButton/AppButton';
import ThemeDark from '@shared/assets/icons/theme-dark.svg';
import ThemeLight from '@shared/assets/icons/theme-light.svg';
import ThemeMint from '@shared/assets/icons/theme-mint.svg';
import { classNames } from '@shared/lib/classNames';
import { Theme, useTheme } from '@app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  const getTheme = (t: Theme) => {
    const themesMap = {
      [Theme.DARK]: <ThemeDark />,
      [Theme.DEFAULT]: <ThemeLight />,
      [Theme.MINT]: <ThemeMint />,
    };

    return themesMap[t];
  };

  return (
    <AppButton onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, [className])} theme={ButtonTheme.CLEAR}>
      {getTheme(theme)}
    </AppButton>
  );
});

export default ThemeSwitcher;
