import { classNames } from '@shared/lib/classNames';
import AppSelect from '@shared/ui/AppSelect/AppSelect';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  val?: string;
  readonly?: boolean;
  onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, val, readonly, onChange } = props;

  const { t } = useTranslation('currency');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <AppSelect
      className={classNames('', [className])}
      label={t('currencyLabel')}
      readonly={readonly}
      val={val}
      onChange={onChangeHandler}
      options={Object.entries(Currency).map(([value, content]) => ({
        value,
        content,
      }))}
    />
  );
});
