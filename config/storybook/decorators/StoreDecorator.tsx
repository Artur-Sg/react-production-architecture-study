/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@app/providers/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from '@features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

// eslint-disable-next-line operator-linebreak
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersMapObject<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
