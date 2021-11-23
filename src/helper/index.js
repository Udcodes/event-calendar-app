import dayjs from "dayjs";

export const getAllDaysInMonth = (month) => {
  const monthIndex = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, monthIndex, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysArray = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, monthIndex, currentMonthCount));
    });
  });

  return daysArray;
};

export const getCurrentDay = (day) => {
  return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? "bg-blue-600 text-white rounded-full w-7"
    : "";
};

export const formObject = (values) => {
  return {
    title: values?.title || "",
    startTime: values?.startTime || "",
    endTime: values?.endTime || "",
    day: values?.day || "",
    id: values?.id || "",
  };
};

export const iconVariant = "material-icons-outlined cursor-pointer";
export const commonStyle = "h-screen flex";

export const sortEventInAscendingOrderByStartTime = (arr) => {
  const getNumberFromTime = (time) => +time.replace(/:/g, "");
  return arr.sort(
    (a, b) => getNumberFromTime(a.startTime) - getNumberFromTime(b.startTime)
  );
};
