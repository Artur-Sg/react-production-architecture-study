import { AboutPage } from '@pages/AboutPage';
import { classNames } from '@shared/lib/classNames/classNames';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { Suspense } from 'react';
import { useTheme } from '@app/providers/ThemeProvider';
import '../app/styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change style</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />}></Route>
          <Route path={'/'} element={<MainPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
