import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import EyeIcon from '@shared/assets/icons/eye.svg';
import CalendarIcon from '@shared/assets/icons/calendar.svg';
import DynamicModuleLoader, { ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import AppText, { AppTextAlign, AppTextSize } from '@shared/ui/AppText/AppText';
import { AppSkeleton } from '@shared/ui/AppSkeleton/AppSkeleton';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';

import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { AppAvatar } from '../../../../shared/ui/AppAvatar/AppAvatar';
import { AppIcon } from '../../../../shared/ui/AppIcon/AppIcon';

interface ArticleDetailsProps {
  id: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { id } = props;
  const { t } = useTranslation('article');
  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
  };
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <AppSkeleton className={cls.avatar} width={200} height={200} borderRadius="50%" />
        <AppSkeleton className={cls.title} width={300} height={32} />
        <AppSkeleton className={cls.skeleton} width={600} height={24} />
        <AppSkeleton className={cls.skeleton} width="100%" height={200} />
        <AppSkeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = <AppText align={AppTextAlign.CENTER} text={error} title={t('Error')} />;
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <AppAvatar size={200} src={article?.img} className={cls.avatar} />
        </div>

        <AppText className={cls.title} title={article?.title} text={article?.subtitle} size={AppTextSize.L} />

        <div className={cls.articleInfo}>
          <AppIcon className={cls.icon} SVG={EyeIcon} />
          <AppText title={String(article?.views)} />
        </div>

        <div className={cls.articleInfo}>
          <AppIcon className={cls.icon} SVG={CalendarIcon} />
          <AppText title={article?.createdAt} />
        </div>
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
