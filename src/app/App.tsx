import { AppRouter } from '@app/providers/router';
import { classNames } from '@shared/lib/classNames';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { Suspense } from 'react';
import { useTheme } from '@app/providers/ThemeProvider';
import '@app/styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Suspense fallback='Loading...'>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
