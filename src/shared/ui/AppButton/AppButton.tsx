import cls from './AppButton.module.scss';
import { classNames } from '@shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const AppButton: FC<AppButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;

  return (
    <button
      className={classNames(cls.AppButton, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default AppButton;
