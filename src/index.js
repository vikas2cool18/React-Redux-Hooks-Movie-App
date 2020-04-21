import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetMovies} from './actions/movie'
import { setLoading } from './actions/loading';
import {BrowserRouter} from 'react-router-dom'

const store=configureStore()

store.subscribe(()=> {
    console.log(store.getState())
})

const jsx=(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
)

ReactDOM.render(jsx, document.getElementById('root'));
