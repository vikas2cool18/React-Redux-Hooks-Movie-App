import axios from 'axios'
import {setError} from './error'

export const setHeroImage=(heroImage)=> {
 return {
  type: 'SET_HEROIMAGE',
  payload: heroImage
 }
}

export const startGetHeroImage = (endpoint) => {
 return (dispatch) => {
   axios.get(endpoint)
   .then(response=> {
       const movies=response.data.results
       dispatch(setHeroImage(movies[0]))
   })
   .catch(error=> {
       dispatch(setError(error))
   })
 };
};