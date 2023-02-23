import { AppRouter } from '@app/providers/router';
import { classNames } from '@shared/lib/classNames';
import { Navbar } from '@widgets/Navbar';
import { Sidebar } from '@widgets/Sidebar';
import { Suspense } from 'react';

const App = () => (
  <div className={classNames('app')}>
    <Suspense fallback="Loading...">
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  </div>
);

export default App;
