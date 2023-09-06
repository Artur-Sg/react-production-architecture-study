import { CSSProperties, memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './AppSkeleton.module.scss';

interface AppSkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  borderRadius?: string;
}

export const AppSkeleton = memo((props: AppSkeletonProps) => {
  const { className, height, width, borderRadius } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return <div className={classNames(cls.appSkeleton, [className], {})} style={styles} />;
});
