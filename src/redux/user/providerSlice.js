import { createSlice } from "@reduxjs/toolkit";
import { filterProvider, getProvider } from "../../sevives/getProvider";

const initialState = {
listProvider:[],
currenProvider:[],
}


const providerSlice = createSlice({
  name: "provider",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProvider.fulfilled, (state, action) => {
      state.listProvider = action.payload;
      state.currenProvider = action.payload;
    });

    builder.addCase(filterProvider.fulfilled, (state, action) => {
      
      // state.currentUser = action.payload;
    });
  }
})

export default providerSlice.reducer;