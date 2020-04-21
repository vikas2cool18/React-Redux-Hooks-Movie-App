const currentPage=0

const currentPageReducer=(state=currentPage, action)=> {
    switch(action.type) {
        case 'GET_CURRENT_PAGE' : {
            return action.payload
        }
        default : {
            return state
        }
    }
}

export default currentPageReducer