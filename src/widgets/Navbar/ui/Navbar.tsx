import AppLink, { AppLinkTheme } from '@shared/ui/AppLInk/AppLink';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">
          {t('mainPage')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('aboutPage')}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
