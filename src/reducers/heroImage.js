const initialHeroImage={}

const heroImageReducer=(state=initialHeroImage, action)=> {
 switch(action.type) {
  case 'SET_HEROIMAGE' : {
   return {...action.payload}
  }
  default : {
   return {...state}
  }
 }
}

export default heroImageReducer