import React from 'react';
import {createStore} from 'redux';
import {Board} from './src/components/Board';
import {render} from 'react-dom';
import {reducer} from './src/store';
import {Provider} from 'react-redux';

console.log('Definitely working!');

const store = createStore(reducer);

render(
    <Provider store={store}>
        <Board/>
    </Provider>,
    document.getElementById('app-mount')
);
