import { FC, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { classNames } from '@shared/lib/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '../../../entities/Article';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  return (
    <div className={classNames(cls.articleDetailsPage, [className])}>
      {id ? <ArticleDetails id={id} /> : t('notFound')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
