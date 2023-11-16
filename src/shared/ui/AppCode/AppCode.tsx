import { memo, useCallback } from 'react';
import { classNames } from '@shared/lib/classNames/classNames';

import CopyIcon from '@shared/assets/icons/copy.svg';

import cls from './AppCode.module.scss';
import AppButton, { ButtonTheme } from '../AppButton/AppButton';
import { AppIcon } from '../AppIcon/AppIcon';

interface AppCodeProps {
  className?: string;
  text: string;
}

export const AppCode = memo((props: AppCodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.appCode, [className], {})}>
      <AppButton onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
        <AppIcon SVG={CopyIcon} />
      </AppButton>
      <code>{text}</code>
    </pre>
  );
});
