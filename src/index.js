import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import PostIndex from './components/posts_index';
import promise from 'redux-promise';
import PostNew from './components/postnew';
import Postshow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
	<div>
	<Switch>
	<Route path = "/posts/new" component = {PostNew}/>
	<Route path = "/posts/:id" component = {Postshow}/>
	<Route path = "/" component = {PostIndex} />
	</Switch>
	</div>
 </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
