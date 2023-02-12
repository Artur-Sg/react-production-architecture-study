import { FC } from 'react';
import './AppSpinner.module.scss';

interface AppSpinnerProps {
  className?: string;
}

const AppSpinner: FC<AppSpinnerProps> = () => (
  <div className="lds-spinner">
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
