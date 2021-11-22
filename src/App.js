import React, { useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { getMonth, commonStyle } from "./helper";
import CalendarHeader from "./components/CalendarHeader";
import CalendarItem from "./components/CalendarItem";
import EventModal from "./components/EventModal";
import useCalendarEvents from "./hooks/useCalendarEvents";

const App = () => {
  const { monthIndex, showEventModal } = useSelector(
    ({ calendarReducer }) => calendarReducer
  );
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { events, isLoading } = useCalendarEvents();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
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
