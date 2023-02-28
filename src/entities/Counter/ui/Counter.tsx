/* eslint-disable i18next/no-literal-string */
import AppButton from '@shared/ui/AppButton/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.incremented());
  };

  const decrement = () => {
    dispatch(counterActions.decremented());
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <AppButton onClick={increment} data-testid="increment-btn">
        Increment
      </AppButton>
      <AppButton onClick={decrement} data-testid="decrement-btn">
        Decrement
      </AppButton>
    </div>
  );
};

export default Counter;
