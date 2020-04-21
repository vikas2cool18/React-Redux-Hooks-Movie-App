import axios from "axios";
import { setError } from "./error";
export const getCredit=(credit)=> {
 return {
   type: 'GET_CREDIT',
   payload: credit
 }
}

export const startGetCredit=(endpoint)=> {
 return (dispatch)=> {
   axios.get(endpoint)
   .then(response=> {
    console.log('credit response', response.data)
     dispatch(getCredit(response.data))
   })
   .catch(error=> {
     dispatch(setError(error))
   })
 }
}