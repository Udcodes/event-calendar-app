import dayjs from "dayjs";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextMonth, prevMonth, resetMonth } from "../../redux/actions";

import "./styles.scss";

const CalendarHeader = () => {
  const dispatch = useDispatch();
  const { monthIndex } = useSelector(({ calendarReducer }) => calendarReducer);

  const handlePrevMonth = () => {
    dispatch(prevMonth(monthIndex));
  };

  const handleNextMonth = () => {
    dispatch(nextMonth(monthIndex));
  };

  const handleReset = () => {
    dispatch(resetMonth(dayjs().month()));
  };

  return (
    <header className="calendar-header gap-4">
      <h2 className="text-4xl text-gray-600 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
      <div className="flex items-center">
        <button type="button" onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-4xl self-center">
            chevron_left
          </span>
        </button>
        <button onClick={handleReset} className="border rounded py-2 px-4 mx-5">
          Today
        </button>
        <button type="button" onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-4xl self-center">
            chevron_right
          </span>
        </button>
      </div>
    </header>
  );
};

export default CalendarHeader;
