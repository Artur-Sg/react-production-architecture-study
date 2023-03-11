import AppButton from '@shared/ui/AppButton/AppButton';
import { AppInput } from '@shared/ui/AppInput/AppInput';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, [className])}>
      <AppInput className={cls.input} type="text" autofocus label={t('username')} />
      <AppInput className={cls.input} type="password" label={t('password')} />
      <AppButton className={cls.loginBtn}>{t('enter')}</AppButton>
    </div>
  );
};
