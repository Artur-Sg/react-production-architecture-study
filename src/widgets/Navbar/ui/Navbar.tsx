import AppButton, { ButtonTheme } from '@shared/ui/AppButton/AppButton';
import AppModal from '@shared/ui/AppModal/AppModal';
import { classNames } from '@shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <AppButton theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
        {t('enter')}
      </AppButton>
      <AppModal isOpen={isAuthModal} onClose={onToggleModal}>
        Test test Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias minima
        praesentium consequuntur? Sequi molestias dolore optio officia natus culpa rerum, cum
        repellat ipsa velit eligendi quisquam, fugit maxime, nemo quos!
      </AppModal>
    </div>
  );
};

export default Navbar;
