import { memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import AppText, { AppTextAlign } from '../../../../shared/ui/AppText/AppText';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleImageBlockComponent, [className], {})}>
      <img src={block.src} className={cls.img} alt={block?.title} />
      {block.title && <AppText text={block.title} align={AppTextAlign.CENTER} />}
    </div>
  );
});
