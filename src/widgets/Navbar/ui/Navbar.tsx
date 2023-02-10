import AppLink, { AppLinkTheme } from '@shared/ui/AppLInk/AppLink';
import { classNames } from '@shared/lib/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/">
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        About Page
      </AppLink>
    </div>
  </div>
);

export default Navbar;
