import { memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './AppIcon.module.scss';

interface AppIconProps {
  SVG: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

export const AppIcon = memo((props: AppIconProps) => {
  const { SVG, className } = props;

  return <SVG className={classNames(cls.appIcon, [className], {})} />;
});
