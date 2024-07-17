import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendUrl } from '@constants';
import { getData } from '@rest_utils';

const initialState = {
  lists: [],
  status: 'idle',
  error: null,
};

const todoListsSlice = createSlice({
  name: 'todoLists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Thunk Reducers
    builder
      .addCase(getTodoLists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTodoLists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todoLists = action.payload;
      })
      .addCase(getTodoLists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Thunk Actions
export const getTodoLists = createAsyncThunk('todolists/get', async (_, { getState, rejectWithValue }) => {
  const state = getState();
  const authToken = state.currentUser.auth_token;

  try {
    return await getData(`${backendUrl}/todolists`, authToken);
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

// Here we have to explicitly export the actions and the reducers as well.
export default todoListsSlice.reducer;
