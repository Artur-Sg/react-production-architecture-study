/* eslint-disable react/function-component-definition */
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer } from '@features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@entities/Profile';
import { ReducersList } from '@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

// eslint-disable-next-line operator-linebreak
export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
