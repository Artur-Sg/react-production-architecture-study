import { fireEvent, screen } from '@testing-library/react';
import { componentRenderer } from '@config/tests/componentRenderer';
import Counter from './Counter';

describe('Counter', () => {
  test('test initial state', () => {
    componentRenderer(<Counter />, { initialState: { counter: { value: 10 } } });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('test decrement', () => {
    componentRenderer(<Counter />, { initialState: { counter: { value: 10 } } });

    fireEvent.click(screen.getByTestId('decrement-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });

  test('test increment', () => {
    componentRenderer(<Counter />, { initialState: { counter: { value: 10 } } });

    fireEvent.click(screen.getByTestId('increment-btn'));

    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
});
