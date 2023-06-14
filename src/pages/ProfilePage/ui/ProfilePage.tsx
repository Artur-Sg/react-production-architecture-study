import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DynamicModuleLoader, { ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@shared/lib/classNames';
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from '@entities/Profile';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import cls from './ProfilePage.module.scss';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';
import { Currency } from '../../../entities/Currency';
import { Country } from '../../../entities/Country';
import AppText, { AppTextTheme } from '../../../shared/ui/AppText/AppText';
import { ValidateProfileError } from '../../../entities/Profile/model/types/profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('serverError'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrectAge'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrectCountry'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrectUserData'),
    [ValidateProfileError.NO_DATA]: t('noData'),
  };

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastName: value }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string) => {
      const validatedValue = value.replace(/\D+/gm, '');

      dispatch(profileActions.updateProfile({ age: Number(validatedValue || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, [className])}>
        <ProfilePageHeader />
        {validateErrors?.length
          && validateErrors.map((err) => (
            <AppText theme={AppTextTheme.ERROR} text={err} key={validateErrorTranslates[err]} />
          ))}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
