import { Fragment } from "react";
import { ICalendarItemProps } from "./calendarItemInterfaces";
import Days from "./Days";

const CalendarItem = (props: ICalendarItemProps) => {
  const { month, data } = props;

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month?.map((week, i) => (
        <Fragment key={i}>
          {week?.map((day: number | any, idx: number) => (
            <Days day={day} key={idx} rowIdx={i} data={data} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default CalendarItem;
