import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@entities/User';
import { USER_LOCAL_STORAGE_KEY } from '@shared/const/localStorage';
import { AppRoutes } from '@shared/config/routeConfig/routeConfig';
import { ThunkConfig } from '@app/providers/StoreProvider';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      if (extra.navigate) {
        extra.navigate(AppRoutes.ABOUT);
      }

      return response.data;
    } catch (error) {
      console.log(error);

      return rejectWithValue('error');
    }
  }
);
