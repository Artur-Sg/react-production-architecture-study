/* eslint-disable object-curly-newline */
import { classNames, Mods } from '@shared/lib/classNames';
import { ChangeEvent, InputHTMLAttributes, memo, SyntheticEvent, useEffect, useRef, useState } from 'react';
import cls from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>;

interface AppInputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  placeholder?: string;
  label?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
  const {
    className,
    value,
    placeholder,
    label,
    autofocus,
    onChange,
    type = 'text',
    readonly = false,
    ...otherProps
  } = props;

  const [caretPosition, setCaretPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(true);
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  const onSelectHandler = (e: SyntheticEvent<HTMLInputElement, Event>) => {
    setCaretPosition(e?.currentTarget?.selectionStart || 0);
  };

  return (
    <div className={classNames(cls.AppInput, [className], mods)}>
      <label className={cls.labelWrapper}>
        {label && <span className={cls.label}>{label}</span>}
        <div className={cls.caretWrapper}>
          <input
            ref={ref}
            className={cls.input}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChangeHandler}
            onSelect={onSelectHandler}
            readOnly={readonly}
            {...otherProps}
          />
          {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
        </div>
      </label>
    </div>
  );
});
