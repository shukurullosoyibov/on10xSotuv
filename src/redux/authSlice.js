import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isLoggedIn: false,
  data: '',
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    loginSuccess(state, action) {
      const { payload } = action;
      const { id, username, firstname, lastname, token } = payload;
      state.isLoggedIn = true;
      state.data = { id, username, firstname, lastname };
      localStorage.setItem('token', token);
      localStorage.setItem('lastname', firstname  );
      localStorage.setItem('firstname',   lastname );
      state.token = token;
    },
    logoutSuccess(state) {
      state.isLoggedIn = false;
      state.data = '';
      // localStorage.setItem('token', '');
      // localStorage.setItem('lastname', ''  );
      // localStorage.setItem('firstname',   '' );
      state.token = '';
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//     user: '',
//     msg: '',
//     token:'',
//     loading: false,
//     error: ''
// }

// const login_API = 'https://shark.brim.uz/api/auth/register/login';
// const register_API = 'https://shark.brim.uz/api/auth/register/register';

// // signUpUser va signInUser funksiyalarini createAsyncThunk bilan yaratish
// export const signUpUser = createAsyncThunk('auth/signUpUser', async (body) => {
//     const response = await fetch(register_API, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     });
//     return await response.json();
// });

// export const signInUser = createAsyncThunk('auth/signInUser', async (body) => {
//     const response = await fetch(login_API, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     });
//     return await response.json();
// });

// const authSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         addToken: (state, action) => {
//             state.token = localStorage.getItem('token');
//         },
//         addUser: (state, action) => {
//             state.user = localStorage.getItem('user');
//         },
//         addMSG: (state, action) => {
//             state.msg = localStorage.getItem('msg');
//         },
//         logout: (state, action) => {
//             state.token = '';
//             state.user = '';
//             state.msg = '';
//             localStorage.clear();
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(signInUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(signInUser.fulfilled, (state, { payload: { error, msg, token, data } }) => {
//                 state.loading = false;
//                 if (error) {
//                     state.error = error;
//                 } else {
//                     state.msg = msg;
//                     state.token = token;
//                     state.user = data;
//                     localStorage.setItem('msg', msg);
//                     localStorage.setItem('user', JSON.stringify(data));
//                     localStorage.setItem('token', token);
//                 }
//             })
//             .addCase(signUpUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
//                 state.loading = false;
//                 if (error) {
//                     state.error = error;
//                 } else {
//                     state.msg = msg;
//                 }
//             });
//     },
// });

// export const { addToken, addUser, addMSG, logout } = authSlice.actions;
// export default authSlice.reducer;


// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// const initialState = {
//     user: '',
//     msg: '',
//     token:'',
//     loading : false,
//     error: '',


// }
// const login_API = 'https://shark.brim.uz/api/auth/register/login';
// const register_API  = 'https://shark.brim.uz/api/auth/register/register';

// export const signUpUser = createAsyncThunk('singupuser', async (body)=>{
//     const response = await fetch (register_API, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify( body),
//       })
//       return await response.json()
// })
// export const signInUser = createAsyncThunk('singinuser', async (body)=>{
//     const response = await fetch (login_API, {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify( body),
//       })
//       return await response.json()
// })
// const authSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers:{
//        addToken :(state, action)=>{
//         state.token = localStorage.getItem('token');
      
//        },
//        addUser :(state, action)=>{
       
//         state.user = localStorage.getItem('user');
//        },
//        addMSG :(state, action)=>{
        
//         state.msg = localStorage.getItem('msg');
  
//        },
//        logout : (state,action) =>{
//         state.token = null;
//         localStorage.clear();
//        }
//     },
//     /** 
//      * ? sig in ********* 
//      * */
//     extraReducers:{
//       [signInUser.pending]: (state, action) =>{
//         state.loading = true
//       },
//       [signInUser.fulfilled]: (state, {payload: {error,msg, token, data}}) =>{
//         state.loading = false;
//         if(error){
//             state.error = error
//         }
//         else{
//             state.msg = msg
//             state.token = token
//             state.user = data
//             localStorage.setItem('msg', msg)
//             localStorage.setItem('user', JSON.stringify(data))
//             localStorage.setItem('token', token)
//         }
//       },
//       [signUpUser.rejected]: (state,action)=>{
//         state.loading = true
//       },
  
//       /** 
//      * ? sig up ********* 
//      * */
   
//       [signUpUser.pending]: (state, action) =>{
//         state.loading = true
//       },
//       [signUpUser.fulfilled]: (state, {payload: {error,msg}}) =>{
//         state.loading = false;
//         if(error){
//             state.error = error
//         }
//         else{
//             state.msg = msg
//         }
//       },
//       [signUpUser.rejected]: (state,action)=>{
//         state.loading = true
//       },
//     },
// })
// export const {addToken, addUser, logout} = authSlice.actions;
// export default authSlice.reducer




// const initialState = {
//     user: '',
//     msg: '',
//     token:'',
//     loading : false,
//     error: '',
// };

// const login_API = 'https://shark.brim.uz/api/auth/register/login';
// const register_API = 'https://shark.brim.uz/api/auth/register/register';

// export const signUpUser = createAsyncThunk('signupuser', async (body) => {
//     const response = await fetch(register_API, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     });
//     return await response.json();
// });

// export const signInUser = createAsyncThunk('signinuser', async (body) => {
//     const response = await fetch(login_API, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     });
//     return await response.json();
// });

// const authSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         addToken: (state, action) => {
//             state.token = localStorage.getItem('token');
//         },
//         addUser: (state, action) => {
//             state.user = localStorage.getItem('user');
//         },
//         addMSG: (state, action) => {
//             state.msg = localStorage.getItem('msg');
//         },
//         logout: (state, action) => {
//             state.token = null;
//             localStorage.clear();
//         },
//         saveTokenToLocalStorage: (state) => {
//             localStorage.setItem('token', state.token);
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(signInUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(signInUser.fulfilled, (state, { payload: { error, msg, token, user } }) => {
//                 state.loading = false;
//                 if (error) {
//                     state.error = error;
//                 } else {
//                     state.msg = msg;
//                     state.token = token;
//                     state.user = user;
//                     localStorage.setItem('msg', msg);
//                     localStorage.setItem('user', JSON.stringify(user));
//                     localStorage.setItem('token', token);
//                 }
//             })
//             .addCase(signInUser.rejected, (state) => {
//                 state.loading = false;
//             })
//             .addCase(signUpUser.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(signUpUser.fulfilled, (state, { payload: { error, msg } }) => {
//                 state.loading = false;
//                 if (error) {
//                     state.error = error;
//                 } else {
//                     state.msg = msg;
//                 }
//             })
//             .addCase(signUpUser.rejected, (state) => {
//                 state.loading = false;
//             });
//     },
// });

// export const { addToken, addUser, addMSG, logout, saveTokenToLocalStorage } = authSlice.actions;
// export default authSlice.reducer;
