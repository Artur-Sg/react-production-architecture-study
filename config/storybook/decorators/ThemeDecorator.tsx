/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from '@app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <body className={`app ${theme}`}>
        <StoryComponent />
      </body>
    </ThemeProvider>
  );
