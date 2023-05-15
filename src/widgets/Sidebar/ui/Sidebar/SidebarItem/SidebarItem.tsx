import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@shared/lib/classNames';
import AppLink, { AppLinkTheme } from '@shared/ui/AppLInk/AppLink';
import { SidebarItemType } from '../../../model/items';
import { getUserAuthData } from '../../../../../entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = memo((props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  return !item.authOnly || isAuth ? (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, [], { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  ) : null;
});

export default SidebarItem;
