import React, {useEffect} from 'react'
import {connect} from 'react-redux'
//Components
import Navigation from './elements/Navigation'
import MovieInfo from './elements/MovieInfo'
import MovieInfoBar from './elements/MovieInfoBar'
import Actor from './elements/Actor'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import { API_URL, API_KEY } from '../config';
import {startGetMovie} from '../actions/movie'
import {startGetCredit} from '../actions/credits'

const Movie = ({dispatch, match, movie, credit, directors, actors, error}) => {

 const movieEndpoint = `${API_URL}movie/${match.params.movieId}?api_key=${API_KEY}`;
 const creditsEndpoint = `${API_URL}movie/${match.params.movieId}/credits?api_key=${API_KEY}`;

useEffect(() => {
  dispatch(startGetMovie(movieEndpoint))
  dispatch(startGetCredit(creditsEndpoint))
}, [])
if (Object.keys(error).length !== 0) return <div>Something went wrong ...</div>;
  console.log('Movie====================================', movie)
  console.log('Credit====================================', credit)
 return (
  <>
    <Navigation movie={movie.original_title}  />
    <MovieInfo movie={movie} directors={directors}/>
    <MovieInfoBar
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
    />
    <Grid header="Actors">
      {actors.map(actor => (
        <Actor key={actor.credit_id} actor={actor} />
      ))}     
    </Grid>
  </>
 )
}

const mapStateToProps=(state)=> {
/*  console.log('state credit',state.credit)
 const directors = state.credit.crew.filter(
  member => member.job === 'Director'
)
const actors=state.credit.cast */
let directors=[], actors=[]
if(Object.keys(state.credit).length !== 0) {
 directors = state.credit.crew.filter(
  member => member.job === 'Director'
)
 actors=state.credit.cast
}
 return {
  movie: state.movie,
  credit: state.credit,
  error: state.error,
  directors,
  actors
 }
}

export default connect(mapStateToProps)(Movie)
