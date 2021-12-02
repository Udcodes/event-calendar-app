import { IEvent } from "../../interfaces";

export interface ICalendarItemProps {
  month: any[];
  data: IEvent[];
}

export interface IDayProps {
  day: any;
  rowIdx: number;
  data: IEvent[];
}
