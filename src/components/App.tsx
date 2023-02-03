import { AboutPageAsync } from '../pages/AboutPage/AboutPage.async';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from '../pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from '../theme/useTheme';
import '../styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Change style</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About Page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />}></Route>
          <Route path={'/'} element={<MainPageAsync />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
