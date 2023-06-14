import { createSlice } from "@reduxjs/toolkit";
import {editUser, login, showUser} from "../../services/useService";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")),
  profile: {}
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
        console.log(action.payload.data,6666)
        localStorage.setItem("token",  JSON.stringify(action.payload.data));
      }
    });

    builder.addCase(showUser.fulfilled, (state, action)=>{
      state.profile = action.payload;
    });

    builder.addCase(editUser.fulfilled, (state, action)=>{
      state.profile = action.payload;
    });
  },

});
export default userSlice.reducer;
