import {
  SHOW_EVENT_MODAL,
  NEXT_MONTH,
  PREVIOUS_MONTH,
  RESET_MONTH,
  DAY_SELECTED,
  SELECTED_EVENT,
} from "./actionsType";

export const nextMonth = (value) => ({
  type: NEXT_MONTH,
  payload: value,
});

export const prevMonth = (value) => ({
  type: PREVIOUS_MONTH,
  payload: value,
});

export const resetMonth = (value) => ({
  type: RESET_MONTH,
  payload: value,
});

export const daySelected = (value) => ({
  type: DAY_SELECTED,
  payload: value,
});

export const selectedEvent = (value) => ({
  type: SELECTED_EVENT,
  payload: value,
});
export const showEventModal = (value) => ({
  type: SHOW_EVENT_MODAL,
  payload: value,
});
