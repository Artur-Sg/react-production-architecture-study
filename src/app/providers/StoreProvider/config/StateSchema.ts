import { NavigateOptions, To } from 'react-router';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@entities/Counter';
import { UserSchema } from '@entities/User';
import { ProfileSchema } from '@entities/Profile';
import { LoginSchema } from '@features/AuthByUsername';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../../../../entities/Article';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;

  // Async reducers
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
