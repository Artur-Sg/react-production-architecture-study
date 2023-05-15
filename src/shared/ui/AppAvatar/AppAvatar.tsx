import { CSSProperties, useMemo } from 'react';
import { classNames } from '../../lib/classNames';
import cls from './AppAvatar.module.scss';

interface AppAvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const AppAvatar = (props: AppAvatarProps) => {
  const { className, src, size, alt } = props;
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  return <img src={src} alt={alt} style={styles} className={classNames(cls.AppAvatar, [className])} />;
};
