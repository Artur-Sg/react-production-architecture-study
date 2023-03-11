/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';
import AppModal from './AppModal';

describe('AppModal', () => {
  test('test init', () => {
    render(<AppModal>TEST</AppModal>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
});
