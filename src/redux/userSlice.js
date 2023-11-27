import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: null,
  error: null,
  // firstname: null,
  // lastname: null,
  // phone: null,
 
  // token: null,
 
};
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async( params) => { 
    const request = axios.post('https://shark.brim.uz/api/auth/register/login', params);
    const response = await request.then((res) => res.data);
    localStorage.setItem("user", JSON.stringify(response));
    //  if(
    //   response.status === 200
    //  )
    //  {
    //   localStorage.setItem("token", response.data.token);
    //  }
   console.log(response);
   console.log(response.status);
    return response;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers:(builder) => {
      builder
      .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.user = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.user = null;
          console.log(action.error.message);
          if (action.error.message === "Incorrect phone number or password") {
            state.error = "Telefon raqam yoki parol xato kiritildi";
          } else {
            state.error = action.error.message;
          } 
      })
  },
  reducers: {
    // setUser(state, action) {
    
    //   state.firstname = action.payload.firstname;
    //   state.lastname = action.payload.lastname;
    //   state.phone = action.payload.phone;
    //   state.token = null;
    //   state.isAuth = action.payload.isAuth;
    // },
   
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;