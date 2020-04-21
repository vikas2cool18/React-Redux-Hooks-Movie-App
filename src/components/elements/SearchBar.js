import React, { useState, useRef } from 'react'
import FontAwesome from 'react-fontawesome'
import {StyledSearchBar, StyledSearchBarContent} from '../styles/StyledSearchBar'
import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL
    } from '../../config';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

const SearchBar=({callback})=> {
    const [searchText, setSearchText] = useState('')
    const timeOut = useRef(null);
    const doSearch=(e)=> {
        const {value} = e.target
        clearTimeout(timeOut.current);
        setSearchText(value)  
        timeOut.current = setTimeout(() => {
            callback(value)
          }, 500)      
            
    }

    return (
        <StyledSearchBar>
            <StyledSearchBarContent>
                <FontAwesome className='fa-search' size="2x" />
                <input type="text" placeholder="Search Movie" onChange={doSearch} value={searchText} name="searchText" />
            </StyledSearchBarContent>

        </StyledSearchBar>
    )
}

const mapStateToProps=(state)=> {
    return {
    movies: state.movies,
    currentPage: state.currentPage,
    }
}

SearchBar.propTypes={
    callback: PropTypes.func,
}

export default connect(mapStateToProps)(SearchBar)