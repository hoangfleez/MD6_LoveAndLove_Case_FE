import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("users/login", async (user) => {
  try{
    const res = await axios.post("http://127.0.0.1:8181/users/login", user);
    return res.data;
  }catch(err){
    return err.response.data.payload;
  }

});


export const register = createAsyncThunk("users/register", async (user) => {
  try{
    const res = await axios.post("http://127.0.0.1:8181/users/register", user);
    return res.data;
  }catch(err){
    return err.response.data.payload;
  }

});

export const logout = createAsyncThunk("users/logout", async () => {
  localStorage.clear();
  return undefined;
});