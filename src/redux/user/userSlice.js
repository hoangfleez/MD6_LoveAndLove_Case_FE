import { createSlice } from "@reduxjs/toolkit";
import { editUser, login, logout, showUser } from "../../services/useService";




const initialState = {
  currentUser: JSON.parse(localStorage.getItem("token")),
  profile: {},

};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.data, 2222);
      if (typeof action.payload === "string") {
        state.currentUser = undefined;
      } else {
        state.currentUser = action.payload;
        localStorage.setItem("token", JSON.stringify(action.payload.data));
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
