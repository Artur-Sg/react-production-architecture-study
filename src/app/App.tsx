import { AppRouter } from '@app/providers/router';
import { classNames } from '@shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import { useTheme } from '@app/providers/ThemeProvider';
import '@app/styles/index.scss';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change style</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About Page</Link>
      <AppRouter />
    </div>
  );
};

export default App;
