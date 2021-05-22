import {   combineReducers , applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { persistReducer , persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import   ProductsReducer   from '../Global/ProductsReducer'


 const rootReducer = combineReducers({ProductsReducer})

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

const middleWare = []

const store = createStore(persistedReducer , applyMiddleware(thunk ,...middleWare))

const persistedStore = persistStore(store)

export default persistedStore