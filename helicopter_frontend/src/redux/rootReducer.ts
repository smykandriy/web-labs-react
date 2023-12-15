import { combineReducers } from 'redux';
import cartReducer from "../components/common/HelicopterDetailsModal/HelicopterDetails.slice"

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;