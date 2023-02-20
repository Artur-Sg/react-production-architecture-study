import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nTestConfig from '@shared/config/i18n/i18nTestConfig';
import { MemoryRouter } from 'react-router-dom';

export interface RenderWithRouteOptions {
  route?: string;
}

export function renderWithRouter(component: ReactNode, options: RenderWithRouteOptions = {}) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nTestConfig}>{component}</I18nextProvider>
    </MemoryRouter>
  );
}
