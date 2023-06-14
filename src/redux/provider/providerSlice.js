import { createSlice } from "@reduxjs/toolkit";
import { filterProvider, getProvider } from "../../sevives/providerService";
import { addProvider } from "../../services/providerService";

const initialState = {
  listProvider: [],
  currenProvider: [],
  lease: [],
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

    builder.addCase(addProvider.fulfilled, (state, action) => {
      state.lease = action.payload;
    });
  },
  
});

export default providerSlice.reducer;
