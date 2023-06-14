import { createSlice } from "@reduxjs/toolkit";
import {addProvider, showProvider} from "../../services/providerService.js";


const initialState = {
    lease: [],
};


const providerSlice = createSlice({
    name: "provider",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addProvider.fulfilled, (state, action)=>{
            state.lease = action.payload;
        });

        builder.addCase(showProvider.fulfilled, (state, action)=>{
            state.lease = action.payload;
        });
    },
});



export default providerSlice.reducer;

