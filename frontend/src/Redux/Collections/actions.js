import axios from "axios";
import { REQUEST_BARS, REQUEST_BARS_FAILURE, REQUEST_BARS_SUCCESS,REQUEST_SINGLE_PRODUCT } from "./actionType";

const fetchBars=()=>({
    type:REQUEST_BARS
})

const fetchBarsSuccess=(payload)=>({
    type:REQUEST_BARS_SUCCESS,
    payload
})

const fetchBarsFailure=(err)=>({
    type:REQUEST_BARS_FAILURE,
    payload:err
})
const fetchSingleProduct=(payload)=>({
type:REQUEST_SINGLE_PRODUCT,
payload
})

export const fetchCollectionBars=(payload)=>(dispatch)=>{
    dispatch(fetchBars());

    var config = {
        method: 'get',
        url: 'http://localhost:5000/collections/amaze-bars',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     return axios(config)
      .then(({data})=>dispatch(fetchBarsSuccess(data)))
      .catch((err)=>dispatch(fetchBarsFailure(err)))
}

export const fetchCollectionTreats=(payload)=>(dispatch)=>{
    dispatch(fetchBars());
  
    var config = {
        method: 'get',
        url: 'http://localhost:5000/collections/chocolate-covered-nuts',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : payload
      };
      
     return axios(config)
      .then(({data})=>{
        dispatch(fetchBarsSuccess(data))})
      .catch((err)=>{
        dispatch(fetchBarsFailure(err.response))})
}
export const fetchCollectionDiscs=(payload)=>(dispatch)=>{
  dispatch(fetchBars());

  var config = {
      method: 'get',
      url: 'http://localhost:5000/collections/discs',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : payload
    };
    
   return axios(config)
    .then(({data})=>dispatch(fetchBarsSuccess(data)))
    .catch((err)=>dispatch(fetchBarsFailure(err)))
}
export const fetchCollectionBark=(payload)=>(dispatch)=>{
  dispatch(fetchBars());
  var config = {
      method: 'get',
      url: 'http://localhost:5000/collections/dark-bark',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : payload
    };
    
   return axios(config)
    .then(({data})=>dispatch(fetchBarsSuccess(data)))
    .catch((err)=>dispatch(fetchBarsFailure(err)))
}
///collections/amaze-bars/:id
export const getProductDetails=(payload)=>(dispatch)=>{
  // dispatch(fetchBars());
   var config = {
       method: 'get',
       url: `http://localhost:5000/collections/${payload.url}/${payload._id}`,
       headers: { 
         'Content-Type': 'application/json'
       },
     };
     console.log(config)
     axios(config)
     .then(({data})=>dispatch(fetchSingleProduct(data)))
     .catch((err)=>dispatch(fetchBarsFailure(err)))
}