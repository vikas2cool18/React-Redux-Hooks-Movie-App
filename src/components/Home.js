import React, {useEffect, useState} from 'react'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'
import NoImage from '../components/images/no_image.jpg'
import {connect} from 'react-redux'
import {startGetMovies, startGetSearchMovies} from '../actions/movie'
import {currentPageOfMovie} from '../actions/page'
import {startGetHeroImage} from '../actions/heroImage'
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
    BACKDROP_SIZE,
    IMAGE_BASE_URL,
    POSTER_SIZE
  } from '../config';

  

const Home=({dispatch, movies, currentPage, error, setLoading, totalPage, heroImage})=> {
    const [searchTerm, setSearchTerm]=useState('')
    useEffect(() => {
        console.log('i am there to check how many times its called')
         dispatch(startGetMovies(`${POPULAR_BASE_URL}`)) 
         dispatch(startGetHeroImage(`${POPULAR_BASE_URL}`))
    }, [])

    const setMovies=(search)=> {
      
      const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
      setSearchTerm(search)
      dispatch(startGetSearchMovies(endpoint))
      
      
    
    }

    const loadMoreMovies=()=> {
        const searchEndpoint = `${SEARCH_BASE_URL}&query=${searchTerm}&page=${currentPage + 1}`;
        const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;
        dispatch(currentPageOfMovie(currentPage + 1))
        const endpoint = searchTerm ? searchEndpoint : popularEndpoint;
        dispatch(startGetMovies(endpoint))
    }

    if (Object.keys(error).length !== 0) return <div>Something went wrong ...</div>;
    if(!movies) return <Spinner />

    return (
        <>
        { !searchTerm && (
        <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`} title={heroImage.original_title} text={heroImage.overview} />
        )}
        <SearchBar callback={setMovies} />
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
        {setLoading && <Spinner />}
        {currentPage < totalPage && !setLoading &&
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
    }
        </>
    )
}

const mapStateToProps=(state)=> {
    return {
        movies: state.movies,
        currentPage: state.currentPage,
        error: state.error,
        setLoading: state.setLoading,
        totalPage: state.totalPage,
        heroImage: state.heroImage
    }
}

export default connect(mapStateToProps)(Home)