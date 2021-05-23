import { Products } from "./ProductsReducer"
import { cartReducer } from "./cartReducer"
import { combineReducers } from "redux";

const Reducer = combineReducers({
 Products: Products,
 cart: cartReducer
});

export default Reducer;