import { render, screen } from '@testing-library/react';
import AppButton, { ButtonTheme } from './AppButton';

describe('AppButton', () => {
  test('test init', () => {
    render(<AppButton>TEST</AppButton>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('test button style', () => {
    render(<AppButton theme={ButtonTheme.CLEAR}>TEST</AppButton>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
