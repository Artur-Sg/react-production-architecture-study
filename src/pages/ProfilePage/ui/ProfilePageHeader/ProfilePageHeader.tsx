import { classNames } from '@shared/lib/classNames';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from '@entities/Profile';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import AppButton, { ButtonTheme } from '@shared/ui/AppButton/AppButton';
import AppText from '@shared/ui/AppText/AppText';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.ProfilePageHeader, [className])}>
      <AppText title={t('userProfile')} />
      {readonly ? (
        <AppButton className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
          {t('edit')}
        </AppButton>
      ) : (
        <>
          <AppButton className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
            {t('cancel')}
          </AppButton>
          <AppButton className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSave}>
            {t('save')}
          </AppButton>
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;
