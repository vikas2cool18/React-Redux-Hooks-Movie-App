import React from 'react'
import { StyledMovieThumb } from '../styles/StyledMovieThumb';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
const MovieThumb=({ image, movieId, clickable })=> {
    return (
        <StyledMovieThumb>
    {clickable ? (
      <Link to={`${movieId}`}>
        <img className="clickable" src={image} alt="moviethumb" />
      </Link>
      
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
    )
}

MovieThumb.propTypes={
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
}

export default MovieThumb