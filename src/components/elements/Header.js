import React from 'react'
import RMDBLogo from '../images/reactMovie_logo.png'
import TMDBLogo from '../images/tmdb_logo.svg'
import { 
    StyledHeader, 
    StyledRMDBLogo, 
    StyledTMDBLogo
} from '../styles/StyledHeader';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
        <StyledHeader>
          <div className="headerContent">
              <Link to="/"><StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" /></Link>
              
              <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
           </div>  
        </StyledHeader>
        </>
    )
}

export default Header
