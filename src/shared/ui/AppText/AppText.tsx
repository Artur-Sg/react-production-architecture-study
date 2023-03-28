import { classNames } from '@shared/lib/classNames';
import { FC } from 'react';
import cls from './AppText.module.scss';

export enum AppTextTheme {
  DEFAULT = 'default',
  ERROR = 'error',
}

interface AppTextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: AppTextTheme;
}

const AppText: FC<AppTextProps> = (props) => {
  const { className, title, text, theme = AppTextTheme.DEFAULT } = props;

  return (
    <div className={classNames(cls.AppText, [className, cls[theme]])}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
};

export default AppText;
