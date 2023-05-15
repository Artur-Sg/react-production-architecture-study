import { classNames, Mods } from '@shared/lib/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './AppSelect.module.scss';

export type SelectOption = {
  value: string;
  content: string;
};

interface AppSelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  val?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const AppSelect = memo((props: AppSelectProps) => {
  const { className, label, options, val, onChange, readonly = false } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = { [cls.readonly]: readonly };
  const optionsList = useMemo(
    () =>
      options?.map(({ content, value }) => (
        <option className={cls.option} value={value} key={value}>
          {content}
        </option>
      )),
    [options]
  );

  return (
    <div className={classNames(cls.Wrapper, [className], mods)}>
      {label && <span className={cls.label}>{`${label}:`}</span>}
      <select name="" id="" className={cls.select} value={val} onChange={onChangeHandler} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
});

export default AppSelect;
