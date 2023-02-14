import { fireEvent, screen } from '@testing-library/react';
// eslint-disable-next-line max-len
import { renderWithTranslations } from '@shared/lib/classNames/tests/renderWithTranslations/renderWithTranslations';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
  test('test init', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test sidebar toggle', () => {
    renderWithTranslations(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleBnt = screen.getByTestId('sidebar-toggle');

    fireEvent.click(toggleBnt);

    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('collapsed');

    fireEvent.click(toggleBnt);

    expect(sidebar).not.toHaveClass('collapsed');
  });
});
