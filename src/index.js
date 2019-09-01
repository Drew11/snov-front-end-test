import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './style/index.scss';
import RootComponent from './components/RootComponent';
import store from './reducers/rootReducer'

ReactDOM.render(
    <Provider store={store}>
        <RootComponent/>
    </Provider>
    , document.getElementById('root'));
