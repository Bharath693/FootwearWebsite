import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
// import  persistedStore  from './ReduxStore/ReduxStore';
import Reducer from './Redux/Reducers/index'
import {createStore} from 'redux'

const store = createStore(Reducer)
ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>
,document.getElementById('root')
);

