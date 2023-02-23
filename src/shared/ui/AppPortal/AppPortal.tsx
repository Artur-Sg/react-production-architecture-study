import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface AppPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

const AppPortal = (props: AppPortalProps) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};

export default AppPortal;
