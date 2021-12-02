import { ActionType } from "../action-types";
import { IEvent } from "../../interfaces";

interface NextMonthAction {
  type: ActionType.NEXT_MONTH;
  payload: number;
}

interface PrevMonthAction {
  type: ActionType.PREVIOUS_MONTH;
  payload: number;
}

interface ResetMonthAction {
  type: ActionType.RESET_MONTH;
  payload: number;
}

interface SetSelectedDayAction {
  type: ActionType.SET_SELECTED_DAY;
  payload: number;
}

interface SetSelectedEventAction {
  type: ActionType.SET_SELECTED_EVENT;
  payload: IEvent | null;
}

interface ShowEventModalAction {
  type: ActionType.SHOW_EVENT_MODAL;
  payload: boolean;
}

export type Action =
  | NextMonthAction
  | PrevMonthAction
  | ResetMonthAction
  | SetSelectedDayAction
  | SetSelectedEventAction
  | ShowEventModalAction;
