import {createSlice} from "@reduxjs/toolkit";


const initialState = {
  currentUser: JSON.parse(localStorage.getItem('user')),

}


const userSlice = createSlice({
  name:'user',
  initialState,
  extraReducers : builder =>{

  }
})
export default userSlice.reducer;