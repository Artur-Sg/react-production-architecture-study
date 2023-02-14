import { classNames } from '@shared/lib/classNames';
import { LangSwitcher } from '@widgets/LangSwitcher';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppButton, { ThemeButton } from '@shared/ui/AppButton/AppButton';
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
      <AppButton
        type="button"
        theme={ThemeButton.CLEAR}
        onClick={onToggle}
        data-testid="sidebar-toggle"
      >
        {t('toggle')}
      </AppButton>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
