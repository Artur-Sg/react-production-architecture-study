import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AppButton from '@shared/ui/AppButton/AppButton';
import AppText, { AppTextTheme } from '@shared/ui/AppText/AppText';
import DynamicModuleLoader, { ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import i18n from '@shared/config/i18n/i18n';
import { AppInput } from '@shared/ui/AppInput/AppInput';
import { classNames } from '@shared/lib/classNames';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { useAppDispatch } from '../../../../shared/lib/hooks/useAppDispatch';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUserName);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [onSuccess, dispatch, password, username]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={initialReducers}>
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
