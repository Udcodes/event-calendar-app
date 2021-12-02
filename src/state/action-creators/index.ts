import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";
import { IEvent } from "../../interfaces";

export const nextMonth = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NEXT_MONTH,
      payload: value,
    });
  };
};

export const prevMonth = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PREVIOUS_MONTH,
      payload: value,
    });
  };
};

export const resetMonth = (value: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESET_MONTH,
      payload: value,
    });
  };
};

export const setSelectedDay = (value: any) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_SELECTED_DAY,
      payload: value,
    });
  };
};

export const setSelectedEvent = (value: IEvent | null) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_SELECTED_EVENT,
      payload: value,
    });
  };
};

export const setShowEventModal = (value: boolean) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW_EVENT_MODAL,
      payload: value,
    });
  };
};
