import { addDecorator } from '@storybook/react';
import { RouterDecorator, StyleDecorator, ThemeDecorator } from './decorators';
import { StoreDecorator } from './decorators/StoreDecorator';
import '../../src/app/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator('default'));
addDecorator(RouterDecorator);
addDecorator(StoreDecorator);
