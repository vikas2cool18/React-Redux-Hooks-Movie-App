import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from '../reducers/movies'
import currentPageReducer from '../reducers/currentPage'
import errorReducer from '../reducers/errorReducer'
import setLoadingReducer from '../reducers/setLoading'
import totalPageReducer from '../reducers/totalPage'
import heroImageReducer from '../reducers/heroImage'
import creditReducer from '../reducers/credit'
import movieReducer from '../reducers/movie'

const configureStore=()=> {
const store = createStore(combineReducers({
    movies: moviesReducer,
    movie: movieReducer,
    credit: creditReducer,
    currentPage: currentPageReducer,
    error: errorReducer,
    setLoading: setLoadingReducer,
    totalPage: totalPageReducer,
    heroImage: heroImageReducer
}), applyMiddleware(thunk))
return store
}

export default configureStore