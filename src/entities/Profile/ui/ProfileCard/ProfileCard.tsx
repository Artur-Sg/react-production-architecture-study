import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@shared/lib/classNames';
import AppText, { AppTextAlign, AppTextTheme } from '@shared/ui/AppText/AppText';
import { AppAvatar } from '@shared/ui/AppAvatar/AppAvatar';
import { AppInput } from '@shared/ui/AppInput/AppInput';
import { PageLoader } from '@widgets/PageLoader';
import { Profile } from '../../model/types/profile';
import { Currency, CurrencySelect } from '../../../Currency';
import { Country, CountrySelect } from '../../../Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeFirstName?: (value: string) => void;
  onChangeLastName?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstName,
    onChangeLastName,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, [className, cls.loading])}>
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, [className, cls.error])}>
        <AppText text={error} theme={AppTextTheme.ERROR} align={AppTextAlign.CENTER} />
      </div>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <div className={classNames(cls.ProfileCard, [className], mods)}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <AppAvatar src={data?.avatar} alt={t('avatar')} />
          </div>
        )}
        <AppInput
          className={cls.input}
          value={data?.first}
          placeholder={t('firstName')}
          onChange={onChangeFirstName}
          readonly={readonly}
          label={`${t('firstName')}:`}
        />
        <AppInput
          className={cls.input}
          value={data?.lastName}
          placeholder={t('lastName')}
          onChange={onChangeLastName}
          readonly={readonly}
          label={`${t('lastName')}:`}
        />
        <AppInput
          className={cls.input}
          value={data?.age}
          placeholder={t('age')}
          onChange={onChangeAge}
          readonly={readonly}
          label={`${t('age')}:`}
        />
        <AppInput
          className={cls.input}
          value={data?.city}
          placeholder={t('city')}
          onChange={onChangeCity}
          readonly={readonly}
          label={`${t('city')}:`}
        />
        <AppInput
          className={cls.input}
          value={data?.username}
          placeholder={t('username')}
          onChange={onChangeUsername}
          readonly={readonly}
          label={`${t('username')}:`}
        />
        <AppInput
          className={cls.input}
          value={data?.avatar}
          placeholder={t('avatarLink')}
          onChange={onChangeAvatar}
          readonly={readonly}
          label={`${t('avatarLink')}:`}
        />
        <CurrencySelect readonly={readonly} val={data?.currency} onChange={onChangeCurrency} />
        <CountrySelect readonly={readonly} val={data?.country} onChange={onChangeCountry} />
      </div>
    </div>
  );
};
