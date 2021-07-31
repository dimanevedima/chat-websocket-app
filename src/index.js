import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';

import App from './App';
import chat from './reducers';
//import {addUser} from './actions';

import handleNewMessage from './sagas';
import username from './utils/name';

import setupSocket from './sockets';

const sagaMiddleware = createSagaMiddleware();

//const store = createStore(chat);
const store = createStore(
  chat,
  applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username});

//store.dispatch(addUser(user));


ReactDOM.render(
    <Provider store = {store} >
    <App />
    </Provider>
  ,document.getElementById('root')
);
