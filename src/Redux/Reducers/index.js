import { Products } from "./Products-Reducer";
import { SelectProductReducer } from "./Select-Product-Reducer";
import { combineReducers } from "redux";

const Reducer = combineReducers({
  Products: Products,
  SelectProduct: SelectProductReducer,
});

export default Reducer;
