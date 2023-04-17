import { memo, useMemo, useState } from 'react';
import AppButton, { ButtonSize, ButtonTheme } from '@shared/ui/AppButton/AppButton';
import { classNames } from '@shared/lib/classNames';
import { LangSwitcher } from '@widgets/LangSwitcher';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import SidebarItem from './SidebarItem/SidebarItem';
import { SidebarItemTypeList } from '../../model/items';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(
    () => SidebarItemTypeList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
    [collapsed]
  );

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <div className={cls.items}>{itemList}</div>

      <AppButton
        type="button"
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.M}
        square
        onClick={onToggle}
        // eslint-disable-next-line i18next/no-literal-string
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
});

export default Sidebar;
