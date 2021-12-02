import dayjs from "dayjs";
import { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";
import { IDayProps } from "./calendarItemInterfaces";
import {
  getCurrentDay,
  sortEventInAscendingOrderByStartTime,
} from "../../helper";
import "./styles.scss";

const Days = ({ day, rowIdx, data }: IDayProps) => {
  const dispatch = useDispatch();
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const [isDayInMonth, setIsDayInMonth] = useState<boolean>(false);
  const { monthIndex } = useSelector(({ calender }: State) => calender);
  const { setShowEventModal, setSelectedEvent, setSelectedDay } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const events = data?.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );

    const isADayInSelectedMonth =
      dayjs(new Date(dayjs().year(), monthIndex)).format("MM") ===
      day.format("MM");

    setDayEvents(events);
    setIsDayInMonth(isADayInSelectedMonth);
  }, [data, day, monthIndex]);

  const onDateSelect = () => {
    if (!isDayInMonth) {
      return;
    }
    setSelectedDay(day);
    setShowEventModal(true);
  };

  return (
    <div
      className={`flex flex-col border border-gray-200 ${
        !isDayInMonth
          ? "bg-gray-100"
          : "group hover:bg-indigo-50 hover:shadow-lg"
      }`}
    >
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p
          className={`text-sm p-1 my-1 text-center  ${getCurrentDay(day)} ${
            !isDayInMonth ? "opacity-0" : ""
          }`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className={`flex-1 ${
          !isDayInMonth ? "opacity-0 cursor-default" : "cursor-pointer"
        }`}
        onClick={onDateSelect}
      >
        {sortEventInAscendingOrderByStartTime(dayEvents)?.map((evt) => (
          <div
            key={evt.id}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-indigo-200 px-1 mr-3 text-gray-600 text-sm mb-1 day-tiles`}
          >
            <span className="truncate">
              {evt.title} @ {evt.startTime}
            </span>
            <span className="material-icons-outlined cursor-pointer text-xl">
              edit
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Days);
