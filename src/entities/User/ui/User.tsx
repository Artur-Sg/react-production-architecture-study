import { classNames } from '@shared/lib/classNames';
import cls from './User.module.scss';

interface UserProps {
  className?: string;
}

const User = ({ className }: UserProps) => <div className={classNames(cls.user, [className])} />;

export default User;
