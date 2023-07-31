import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from '@shared/config/routeConfig/routeConfig';
import PageLoader from '@widgets/PageLoader/ui/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback(({ path, element, authOnly }: AppRoutesProps) => {
    const el = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{element}</div>
      </Suspense>
    );
    return <Route key={path} path={path} element={authOnly ? <RequireAuth>{el}</RequireAuth> : element} />;
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
