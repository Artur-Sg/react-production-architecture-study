import AppButton from '@shared/ui/AppButton/AppButton';
import { useEffect, useState } from 'react';

const BugButton = () => {
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <AppButton onClick={throwError}>throw Error</AppButton>
  );
};

export default BugButton;
