const totalPageInitialValue=0

const totalPageReducer=(state=totalPageInitialValue, action)=> {
    switch(action.type) {
        case 'GET_TOTAL_PAGES' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default totalPageReducer