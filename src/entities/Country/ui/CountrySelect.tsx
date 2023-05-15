import { classNames } from '@shared/lib/classNames';
import AppSelect from '@shared/ui/AppSelect/AppSelect';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../model/types/country';

interface CountrySelectProps {
  className?: string;
  val?: string;
  readonly?: boolean;
  onChange?: (value: Country) => void;
}

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, val, readonly, onChange } = props;

  const { t } = useTranslation('country');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <AppSelect
      className={classNames('', [className])}
      label={t('countryLabel')}
      readonly={readonly}
      val={val}
      onChange={onChangeHandler}
      options={Object.entries(Country).map(([content, value]) => ({
        content,
        value,
      }))}
    />
  );
});
