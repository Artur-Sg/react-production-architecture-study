import { FC } from 'react';
import cls from './AppSpinner.module.scss';

interface AppSpinnerProps {
  className?: string;
}

const AppSpinner: FC<AppSpinnerProps> = () => (
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
);

export default AppSpinner;
