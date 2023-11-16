import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import AppText from '../../../../shared/ui/AppText/AppText';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div className={classNames(cls.articleTextBlockComponent, [className], {})}>
        {block.title && <AppText title={block.title} className={cls.title} />}
        {block.paragraphs?.map((paragraph) => (
          <AppText key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  }
);
