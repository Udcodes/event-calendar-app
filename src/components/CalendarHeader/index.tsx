import dayjs from "dayjs";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

import "./styles.scss";

const CalendarHeader: FC = () => {
  const dispatch = useDispatch();
  const { resetMonth, nextMonth, prevMonth } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { monthIndex } = useSelector((state: State) => state.calender);

  const handlePrevMonth = () => {
    prevMonth(monthIndex);
  };

  const handleNextMonth = () => {
    nextMonth(monthIndex);
  };

  const handleReset = () => {
    resetMonth(dayjs().month());
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
