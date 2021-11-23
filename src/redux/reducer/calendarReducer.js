import dayjs from "dayjs";

const initialState = {
  monthIndex: dayjs().month(),
  daySelected: null,
  showEventModal: false,
  selectedEvent: null,
};

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_MONTH":
      return { ...state, monthIndex: state.monthIndex + 1 };
    case "PREVIOUS_MONTH":
      return { ...state, monthIndex: state.monthIndex - 1 };
    case "RESET_MONTH":
      return { ...state, monthIndex: action.payload };
    case "DAY_SELECTED":
      return { ...state, daySelected: action.payload };
    case "SHOW_EVENT_MODAL":
      return { ...state, showEventModal: action.payload };
    case "SELECTED_EVENT":
      return { ...state, selectedEvent: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
