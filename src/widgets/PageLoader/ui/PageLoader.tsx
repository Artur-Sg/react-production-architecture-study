import { classNames } from '@shared/lib/classNames';
import AppSpinner from '../../../shared/ui/AppSpinner/AppSpinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, [className])}>
    <AppSpinner />
  </div>
);

export default PageLoader;
