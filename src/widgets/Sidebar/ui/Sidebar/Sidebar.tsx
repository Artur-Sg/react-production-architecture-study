import cls from './Sidebar.module.scss';
import { classNames } from '@shared/lib/classNames';
import { ThemeSwitcher } from '@widgets/ThemeSwitcher';
import { useState } from 'react';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className='switchers'>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Sidebar;
