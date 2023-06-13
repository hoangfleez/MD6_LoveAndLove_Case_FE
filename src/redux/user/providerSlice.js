import { createSlice } from "@reduxjs/toolkit";
import { getProvider } from "../../sevives/getProvider";

const initialState = {
  checkboxValue: false,
  checkbox: [],
}


const providerSlice = createSlice({
  name: "provider",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProvider.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  }
})

export default providerSlice.reducer;