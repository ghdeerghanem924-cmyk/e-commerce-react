import { createSlice } from "@reduxjs/toolkit";

const initState = { users: [], currentUser: null };
const registerSlice = createSlice({
  name: "register",
  initialState: initState,
  reducers: {
    login: (state, action) => {
      state.users.push(action.payload);
    },
    logout: (state, action) => {
      state.users.shift();
    },
  },
});
export default registerSlice.reducer;
export const { login, logout } = registerSlice.actions;