import { classNames } from '@shared/lib/classNames';
import { memo } from 'react';
import cls from './AppText.module.scss';

export enum AppTextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
}

export enum AppTextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum AppTextSize {
  M = 'size_m',
  L = 'size_l',
}

interface AppTextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: AppTextTheme;
  align?: AppTextAlign;
  size?: AppTextSize;
}

const AppText = memo((props: AppTextProps) => {
  const {
    className,
    title,
    text,
    theme = AppTextTheme.DEFAULT,
    align = AppTextAlign.LEFT,
    size = AppTextSize.M,
  } = props;

  return (
    <div className={classNames(cls.AppText, [className, cls[theme], cls[align], cls[size]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});

export default AppText;
