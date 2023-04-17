import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@shared/lib/classNames';
import AppText from '@shared/ui/AppText/AppText';
import { getProfileData } from '../../model/selectors';
import cls from './ProfileCard.module.scss';
import AppButton, { ButtonTheme } from '../../../../shared/ui/AppButton/AppButton';
import { AppInput } from '../../../../shared/ui/AppInput/AppInput';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  // const error = useSelector(getProfileError);
  // const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(cls.ProfileCard, [className])}>
      <div className={cls.header}>
        <AppText title={t('userProfile')} />
        <AppButton className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('edit')}
        </AppButton>
      </div>
      <div className={cls.data}>
        <AppInput className={cls.input} value={data?.first} placeholder={t('firstName')} />
        <AppInput className={cls.input} value={data?.lastName} placeholder={t('lastName')} />
      </div>
    </div>
  );
};
