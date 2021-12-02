import React, { useState, useEffect, memo, FC } from "react";
import { useSelector } from "react-redux";
import { getAllDaysInMonth, commonStyle } from "./helper";
import CalendarHeader from "./components/CalendarHeader";
import CalendarItem from "./components/CalendarItem";
import EventModal from "./components/EventModal";
import useCalendarEvents from "./hooks/queries/useCalendarEvents";
import { Dayjs } from "dayjs";
import { State } from "./state";

const App: FC = () => {
  const { monthIndex, showEventModal } = useSelector(
    (state: State) => state.calender
  );
  const [currentMonth, setCurrentMonth] = useState<Dayjs[][]>([]);
  const { events, isLoading } = useCalendarEvents();

  useEffect(() => {
    setCurrentMonth(getAllDaysInMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
      {showEventModal && <EventModal />}
      <div className={`${commonStyle} flex-col overflow-hidden`}>
        <CalendarHeader />
        {isLoading ? (
          <p className={`${commonStyle} items-center justify-center`}>
            Loading events...
          </p>
        ) : (
          <CalendarItem month={currentMonth} data={events} />
        )}
      </div>
    </>
  );
};

export default memo(App);
