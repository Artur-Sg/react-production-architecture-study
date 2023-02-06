import cls from './AppLink.module.scss';
import { classNames } from '@shared/lib/classNames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls['app-link'], [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};

export default AppLink;
