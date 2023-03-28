import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AppButton from '@shared/ui/AppButton/AppButton';
import { AppInput } from '@shared/ui/AppInput/AppInput';
import { classNames } from '@shared/lib/classNames';
import AppText, { AppTextTheme } from '@shared/ui/AppText/AppText';
import i18n from '@shared/config/i18n/i18n';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.LoginForm, [className])}>
      <AppText title={t('authorizationForm')} />
      {error && <AppText theme={AppTextTheme.ERROR} text={i18n.t('authError')} />}
      <AppInput
        onChange={onChangeUsername}
        className={cls.input}
        type="text"
        autofocus
        label={t('username')}
        value={username}
      />
      <AppInput
        onChange={onChangePassword}
        className={cls.input}
        type="password"
        label={t('password')}
        value={password}
      />
      <AppButton onClick={onLoginClick} className={cls.loginBtn} disabled={isLoading}>
        {t('enter')}
      </AppButton>
    </div>
  );
});
