import { createSlice } from "@reduxjs/toolkit";
import {addProvider} from "../../services/providerService.js";


const initialState = {
    lease: [],
};


const providerSlice = createSlice({
    name: "provider",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addProvider.fulfilled, (state, action)=>{
            state.provider = action.payload;
        });
    },
});

export default providerSlice.reducer;

