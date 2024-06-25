import { combineReducers, createStore } from "redux";
import { bookReducer } from "./reducer/bookReducer";

const rootReducer= combineReducers({
    bookReducer
})
const store=  createStore(rootReducer);
// XUẤT KHO RA CHO APP DÙNG.
export default store;