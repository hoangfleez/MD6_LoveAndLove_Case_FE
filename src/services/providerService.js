import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addProvider = createAsyncThunk("provider/addProvider", async (provider) => {
    try{
        const res = await axios.post(" http://127.0.0.1:8181/providers", provider);
        return res.data;
    }catch(err){
        return err.response.data.payload;
    }

});