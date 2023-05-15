import { RoutePath } from '@shared/config/routeConfig/routeConfig';
import MainIcon from '@shared/assets/icons/home.svg';
import AboutIcon from '@shared/assets/icons/list.svg';
import ProfileIcon from '@shared/assets/icons/profile.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemTypeList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'mainPage',
    Icon: MainIcon,
  },
  {
    path: RoutePath.about,
    text: 'aboutPage',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'profile',
    Icon: ProfileIcon,
    authOnly: true,
  },
];
