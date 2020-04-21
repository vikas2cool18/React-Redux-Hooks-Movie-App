const initialMoviesValues=[]

const moviesReducer=(state=initialMoviesValues, action) => {

    switch(action.type) {
        case 'GET_MOVIES': {
            return [...state, ...action.payload]

        }
        case 'SET_SEARCH_MOVIES' : {
            return [...action.payload]
        }
            default : {
                return [...state]
            }
        }
    }


export default moviesReducer