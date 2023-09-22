import { FC, memo } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { AppCode } from '../../../../shared/ui/AppCode/AppCode';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return <AppCode className={classNames(cls.codeBlock, [className], {})} text={block.code} />;
  }
);
