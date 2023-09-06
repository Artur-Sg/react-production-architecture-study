import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@shared/lib/classNames/classNames';
import DynamicModuleLoader, { ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import AppText, { AppTextAlign } from '@shared/ui/AppText/AppText';
import { AppSkeleton } from '@shared/ui/AppSkeleton/AppSkeleton';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services';
import {
  // getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  id: string;
  className?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
  };
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  // const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <AppSkeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
        <AppSkeleton className={cls.title} width={300} height={32} />
        <AppSkeleton className={cls.skeleton} width={600} height={24} />
        <AppSkeleton className={cls.skeleton} width="100%" height={200} />
        <AppSkeleton className={cls.skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = <AppText align={AppTextAlign.CENTER} text={error} title={t('Error')} />;
  } else {
    content = <div className={classNames(cls.articleDetails, [className], {})}>{t('articleDetailsPage')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
