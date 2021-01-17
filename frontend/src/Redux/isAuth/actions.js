import axios from "axios"
import { REQUEST_USER_LOGIN, REQUEST_USER_LOGIN_FAILURE, REQUEST_USER_LOGIN_SUCCESS, REQUEST_USER_SIGNUP, REQUEST_USER_SIGNUP_FAILURE, REQUEST_USER_SIGNUP_SUCCESS, USER_LOGOUT } from "./actionType";

const fetchUserSignUp=()=>({
    type:REQUEST_USER_SIGNUP
})

const fetchUserSignUpSuccess=(payload)=>({
    type:REQUEST_USER_SIGNUP_SUCCESS,
    payload
})

const fetchUserSignUpFailure=(err)=>({
    type:REQUEST_USER_SIGNUP_FAILURE,
    payload:err
})

export const userSignUp=payload=>dispatch=>{
    dispatch(fetchUserSignUp());
    var config = {
        method: 'post',
        url: 'http://localhost:5000/account/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
        console.log(config)
return axios(config)
       .then((response)=>{
        console.log(response)
        dispatch(fetchUserSignUpSuccess(response))
        })
       .catch((error)=>{
        dispatch(fetchUserSignUpFailure(error))
        });
}

const fetchUserLogin=()=>({
    type:REQUEST_USER_LOGIN
})

const fetchUserLoginSuccess=(payload)=>({
    type:REQUEST_USER_LOGIN_SUCCESS,
    payload
})

const fetchUserLoginFailure=(error)=>({
    type:REQUEST_USER_LOGIN_FAILURE,
    payload:error
})

export const userLogin=payload=>dispatch=>{
    dispatch(fetchUserLogin());

    var config = {
    method: 'get',
    url: 'http://localhost:5000/user/profile',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : payload
  };
  console.log(config)
   return axios(config)
  .then( (res)=> {
    console.log("res",res)
        dispatch(fetchUserLoginSuccess(res.data))})
  .catch((err)=> {
    console.log("err",err)
       dispatch(fetchUserLoginFailure(err))
  });
}


export const userLogout=()=>({
   type:USER_LOGOUT
})