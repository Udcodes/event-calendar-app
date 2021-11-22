import React, { Fragment } from "react";
import Days from "./Days";

const CalendarItem = ({ month = [], data = [] }) => {
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((week, i) => (
        <Fragment key={i}>
          {week.map((day, idx) => (
            <Days day={day} key={idx} rowIdx={i} data={data} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default CalendarItem;
