import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@app/providers/StoreProvider';
import i18nForTests from '@shared/config/i18n/i18nTestConfig';
import { DeepPartial } from '@reduxjs/toolkit';

export interface RenderWithRouteOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export function componentRenderer(component: ReactNode, options: RenderWithRouteOptions = {}) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState as StateSchema}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
