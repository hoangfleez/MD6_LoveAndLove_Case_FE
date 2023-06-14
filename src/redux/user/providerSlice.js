import { createSlice } from "@reduxjs/toolkit";
import { filterProvider, getProvider } from "../../sevives/providerService";

const initialState = {
  listProvider: [],
  currenProvider: [],
};

const providerSlice = createSlice({
  name: "provider",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProvider.fulfilled, (state, action) => {
      state.listProvider = action.payload;
      state.currenProvider = action.payload;
    });

    builder.addCase(filterProvider.fulfilled, (state, { payload }) => {
      let arr = payload.listProvider.filter((element) => {
        return payload.service.some((item) => {
          return element.other.includes(item);
        });
      });
      // console.log(arr,6666);
      // return arr;
    });
  },
});

export default providerSlice.reducer;
