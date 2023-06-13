import { createSlice } from "@reduxjs/toolkit";

import { editUser, login, logout, showUser } from "../../sevives/useService";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")),
  profile: {},


};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {

      if (typeof action.payload === "string") {
        state.currentUser = undefined;
      } else {
        state.currentUser = action.payload;

        localStorage.setItem("user", JSON.stringify(action.payload.payload));
      }
    });

    builder.addCase(logout.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });

    builder.addCase(showUser.fulfilled, (state, action) => {
      state.profile = action.payload;
    });

    builder.addCase(editUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });

  },
});
export default userSlice.reducer;
