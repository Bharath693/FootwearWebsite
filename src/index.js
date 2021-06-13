import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import  { store, persistedStore}  from './ReduxStore/ReduxStore'
import {PersistGate} from 'redux-persist/integration/react'
// import PersistedStore from './ReduxStore/ReduxStore'
// import Reducer from './Redux/Reducers/index'
// import {createStore} from 'redux'

// const store = createStore(Reducer ,devToolsEnhancer())
ReactDOM.render(
<Provider store = {store}>
<PersistGate loading={null} persistor={persistedStore}>
<App />
</PersistGate>
</Provider>
,document.getElementById('root')
);

