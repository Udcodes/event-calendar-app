import dayjs from "dayjs";
import { ActionType } from "../action-types";
import { Action } from "../actions/index";
import { ICalenderState } from "../../interfaces";

const initialState: ICalenderState = {
  monthIndex: dayjs().month(),
  daySelected: null,
  showEventModal: false,
  calendarEvent: null,
};

const calendarReducer = (
  state = initialState,
  action: Action
): ICalenderState => {
  switch (action.type) {
    case ActionType.NEXT_MONTH:
      return { ...state, monthIndex: state.monthIndex + 1 };
    case ActionType.PREVIOUS_MONTH:
      return { ...state, monthIndex: state.monthIndex - 1 };
    case ActionType.RESET_MONTH:
      return { ...state, monthIndex: action.payload };
    case ActionType.SET_SELECTED_DAY:
      return { ...state, daySelected: action.payload };
    case ActionType.SHOW_EVENT_MODAL:
      return { ...state, showEventModal: action.payload };
    case ActionType.SET_SELECTED_EVENT:
      return { ...state, calendarEvent: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
