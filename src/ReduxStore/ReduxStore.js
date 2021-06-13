import {   combineReducers , applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { persistReducer , persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import { devToolsEnhancer } from 'redux-devtools-extension'
import   { Products }   from '../Redux/Reducers/ProductsReducer'
import { CartReducer } from '../Redux/Reducers/CartReducer'

 const rootReducer = combineReducers({
     ProductsR: Products,
     Cart: CartReducer
 })
 
const persistConfig = {
    key:"root",
    storage,
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

const middleWare = [thunk]

export const store = createStore(persistedReducer , applyMiddleware(...middleWare))

export const persistedStore = persistStore(store)

