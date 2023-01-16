import { combineReducers } from "redux";
import customerSlice from "./customerSlice";
import regionSlice from "./regionSlice";

export default combineReducers({
  // TODO: add all created reducers
  customer: customerSlice,
  regions: regionSlice,
});
