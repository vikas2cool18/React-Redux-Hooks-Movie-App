const setLoadingInitialValue=true

const setLoadingReducer=(state=setLoadingInitialValue, action)=> {
    switch(action.type) {
        
        case 'SET_LOADING' : {
            console.log('i am called in set Loading')
            return action.payload
        }
        default : {
            console.log('i am called in default')
            return state
        }
    }
}

export default setLoadingReducer