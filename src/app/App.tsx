import { AppRouter } from '@app/providers/router';
import { classNames } from '@shared/lib/classNames';
import { Navbar } from '@widgets/Navbar';
import { useTheme } from '@app/providers/ThemeProvider';
import '@app/styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
