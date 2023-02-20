import { classNames } from '@shared/lib/classNames';
import { RoutePath } from '@shared/config/routeConfig/routeConfig';
import { LangSwitcher } from '@widgets/LangSwitcher';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppButton, { ButtonSize, ButtonTheme } from '@shared/ui/AppButton/AppButton';
import AppLink, { AppLinkTheme } from '@shared/ui/AppLInk/AppLink';
import MainIcon from '@shared/assets/icons/home.svg';
import AboutIcon from '@shared/assets/icons/list.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
          <MainIcon className="icon" title="Test" />
          <span className="link">{t('mainPage')}</span>
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
          <AboutIcon className="icon" />
          <span className="link">{t('aboutPage')}</span>
        </AppLink>
      </div>

      <AppButton
        type="button"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.M}
        square
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={cls.collapsedBtn}
      >
        {collapsed ? '>' : '<'}
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short />
      </div>
    </div>
  );
};

export default Sidebar;
