
import axios from "axios";
import { setError } from "./error";
import { setLoading } from "./loading";
import { currentPageOfMovie, totalPages } from "./page";


export const getMovie=(movie)=> {
  return {
    type: 'GET_MOVIE',
    payload: movie
  }
}

export const startGetMovie=(endpoint)=> {
  return (dispatch)=> {
    axios.get(endpoint)
    .then(response=> {
      console.log('Movie Response', response)
      dispatch(getMovie(response.data))
    })
    .catch(error=> {
      dispatch(setError(error))
    })
  }
}


export const getMovies=(movies)=> {
    return {
        type: 'GET_MOVIES',
        payload: movies
    }
}

export const setSearchMovies=(movies)=> {
  return {
    type: 'SET_SEARCH_MOVIES',
    payload: movies
  }
}

export const startGetSearchMovies=(endpoint)=> {
  return (dispatch) => {
    axios.get(endpoint)
    .then(response=> {
      const movies=response.data.results
      dispatch(setSearchMovies(movies))
    })
    .catch(error=> {
    dispatch(setError(error))      

    })
  }
}

export const startGetMovies = (endpoint) => {
  return (dispatch) => {
    axios.get(endpoint)
    .then(response=> {
        const movies=response.data.results
        console.log(movies)
        dispatch(getMovies(movies)) 
        dispatch(setLoading(false))
        dispatch(currentPageOfMovie(response.data.page))
        dispatch(totalPages(response.data.total_pages))
    })
    .catch(error=> {
        dispatch(setError(error))
    })
  };
};



