import { classNames } from '@shared/lib/classNames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './AppButton.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clear-inverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background-inverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

const AppButton = memo((props: AppButtonProps) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square = false,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.AppButton, [className, cls[theme], cls[size]], {
        [cls.square]: square,
        [cls.disabled]: disabled,
      })}
      disabled={disabled}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
});

export default AppButton;
