/* eslint-disable i18next/no-literal-string */
import AppButton, { ButtonTheme } from '@shared/ui/AppButton/AppButton';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { LoginModal } from '../../../features/AuthByUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <AppButton theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('enter')}
      </AppButton>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};

export default Navbar;
