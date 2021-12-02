export interface IEvent {
  title: string;
  startTime: string;
  endTime: string;
  day: number;
  id: number;
}

export interface ICalenderState {
  monthIndex: number;
  daySelected: any;
  showEventModal: boolean;
  calendarEvent: IEvent | null;
}
