import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendUrl } from '@constants';
import { unAuthPostData } from '@rest_utils';

const initialState = null;

const registrationSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout() {
      return null;
    },
  },
  extraReducers: (builder) => {
    // Thunk Reducers
    builder.addCase(login.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// Thunk Actions
export const login = createAsyncThunk('user/login', async (userData) => {
  const { loginField, password } = userData;
  return await unAuthPostData(`${backendUrl}/login`, { login_field: loginField, password });
});

export const signup = createAsyncThunk('user/signup', async (userData) => {
  return await unAuthPostData(`${backendUrl}/signup`, userData);
});

// Selector function to get current user
export const selectCurrentUser = (state) => state.currentUser;

// Here we have to explicitly export the actions and the reducers as well.
export const { logout } = registrationSlice.actions;
export default registrationSlice.reducer;
