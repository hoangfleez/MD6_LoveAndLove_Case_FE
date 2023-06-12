import { createSlice } from "@reduxjs/toolkit";
import { login } from "../../sevives/useService";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload,2222)
      if (typeof action.payload === "string") {
        state.currentUser = undefined;
      } else {
        state.currentUser = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    });
  },
});
export default userSlice.reducer;
