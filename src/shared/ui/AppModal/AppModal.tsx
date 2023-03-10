import { classNames } from '@shared/lib/classNames';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import cls from './AppModal.module.scss';
import AppPortal from '../AppPortal/AppPortal';

interface AppModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
}

const AppModal = (props: AppModalProps) => {
  const { className, children, lazy, isOpen = false, onClose } = props;

  const [isMounted, setIsMounted] = useState(false);

  const closeHandler = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }

    return () => setIsMounted(false);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <AppPortal>
      <div className={classNames(cls.AppModal, [className], mods)}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </AppPortal>
  );
};

export default AppModal;
