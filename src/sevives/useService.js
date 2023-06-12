import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import customAPI from "./customAPI.js";

export const login = createAsyncThunk("user/login", async (user) => {
    const res = await axios.post("http://127.0.0.1:8181/users/login", user);
    return res.data;
});


export const register = createAsyncThunk("user/register", async (user) => {
    const res = await axios.post(" http://127.0.0.1:8181/users/register", user);
    return res.data;
});

export const editUser = createAsyncThunk("user/editUser", async (idUser) => {
    const res = await axios.put(` http://127.0.0.1:8181/users/${idUser}`);
    return res.data;
});

export const showUser = createAsyncThunk("user/showUser", async (idUser) => {
    const res = await customAPI().get(`/users/${idUser}`);
    return res.data;
});

export const logout = createAsyncThunk("user/logout", async () => {
    localStorage.clear();
    return undefined;
});
