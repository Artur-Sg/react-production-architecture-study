import App from '@app/App';
import ThemeProvider from '@app/providers/ThemeProvider/ui/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@app/providers/ErrorBoundary';
import { render } from 'react-dom';
import '@shared/config/i18n/i18n';
import '@app/styles/index.scss';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root')
);
