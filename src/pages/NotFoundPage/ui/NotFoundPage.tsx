import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import cls from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  const { t } = useTranslation('notFound');

  return <div className={classNames(cls.NotFoundPage)}>{t('notFoundPage')}</div>;
};

export default NotFoundPage;
