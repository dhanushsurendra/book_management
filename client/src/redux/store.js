import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define slice for login token
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
  },
  reducers: {
    setLoginToken: (state, action) => {
      state.token = action.payload;
    },
	clearLoginToken: (state, _) => {
		state.token = null
	}
  },
});

// Export action creators
export const { setLoginToken } = loginSlice.actions;
export const { clearLoginToken } = loginSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;