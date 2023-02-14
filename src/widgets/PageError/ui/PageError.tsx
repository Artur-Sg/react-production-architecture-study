import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import AppButton from '@shared/ui/AppButton/AppButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();
  const updatePage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, [className])}>
      <p>{t('errorText')}</p>
      <AppButton onClick={updatePage}>{t('updatePage')}</AppButton>
    </div>
  );
};

export default PageError;
