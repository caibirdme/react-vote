/**
 * Created by deenjun on 16/2/14.
 */
import React from 'react';
import { render } from 'react-dom';
import VotingContainer from './containers/Voting';
import {Route, Router, hashHistory, IndexRoute} from 'react-router';
import App from './components/App';
import ResultsContainer from './containers/Results';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import IO from 'socket.io-client';
import {setState} from './action_creators';
import remoteActionMiddleware from './middlewares/remote_action_middleware';

const socket = IO('http://localhost:8090');
const createStoreWithMiddleware = applyMiddleware(
    remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);
socket.on('state', state => {
    store.dispatch(setState(state));
});


const routes =
    <Route path="/" component={App}>
        <IndexRoute component={VotingContainer} />
        <Route path="results" component={ResultsContainer} />
    </Route>;

render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);