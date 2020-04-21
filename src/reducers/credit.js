const initialCredit={}

const creditReducer=(state=initialCredit, action)=> {
 switch(action.type) {
  case 'GET_CREDIT' : {
   return {...action.payload}
  }
  default : {
   return {...state}
  }
 }
}

export default creditReducer