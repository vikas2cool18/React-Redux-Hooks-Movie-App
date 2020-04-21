const initialMovie={}

const movieReducer=(state=initialMovie, action)=> {
 switch(action.type) {
  case 'GET_MOVIE' : {
   return {...action.payload}
  }
  default : {
   return {...state}
  }
 }
}

export default movieReducer