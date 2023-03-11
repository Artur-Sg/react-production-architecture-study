import { classNames } from '@shared/lib/classNames';
import AppModal from '@shared/ui/AppModal/AppModal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <AppModal
      lazy
      isOpen={isOpen}
      onClose={onClose}
      className={classNames(cls.loginmodal, [className])}
    >
      <LoginForm />
    </AppModal>
  );
};
