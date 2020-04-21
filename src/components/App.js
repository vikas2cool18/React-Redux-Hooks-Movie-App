import React from 'react';
import Header from './elements/Header'
import Home from './Home';
import {GlobalStyle} from './styles/GlobalStyle'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Movie from './Movie';
import NotFound from './NotFound';

const App = () => {
    return (
        <>
        
            <GlobalStyle />
            <Header />
            <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:movieId" component={Movie} />
            <Route component= {NotFound} />
            </Switch>
        </>
    )

}

export default App;
