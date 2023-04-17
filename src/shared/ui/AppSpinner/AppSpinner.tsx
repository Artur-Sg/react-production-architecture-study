import { FC, memo } from 'react';
import cls from './AppSpinner.module.scss';

interface AppSpinnerProps {
  className?: string;
}

const AppSpinner: FC<AppSpinnerProps> = memo(() => (
  <div className={cls.spinner}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
));

export default AppSpinner;
