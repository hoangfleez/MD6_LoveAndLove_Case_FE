import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import providerReducer from "./user/providerSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    provider: providerReducer
  },
});

export default store;
