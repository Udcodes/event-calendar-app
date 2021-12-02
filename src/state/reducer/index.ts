import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";

const reducers = combineReducers({
  calender: calendarReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
