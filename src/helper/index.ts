import dayjs from "dayjs";
import { IEvent } from "../interfaces";

export const iconVariant: string = "material-icons-outlined cursor-pointer";
export const commonStyle: string = "h-screen flex";

export const getAllDaysInMonth = (month: number) => {
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

export const getCurrentDay = (day: any): string => {
  return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? "bg-blue-600 text-white rounded-full w-7"
    : "";
};

export const formObject = (values: IEvent | null) => {
  return {
    title: values?.title || "",
    startTime: values?.startTime || "",
    endTime: values?.endTime || "",
    day: values?.day || 0,
    id: values?.id || 0,
  };
};

export const sortEventInAscendingOrderByStartTime = (
  arr: IEvent[]
): IEvent[] => {
  const getNumberFromTime = (time: string): number => +time.replace(/:/g, "");

  return arr.sort(
    (a: IEvent, b: IEvent): number =>
      getNumberFromTime(a.startTime) - getNumberFromTime(b.startTime)
  );
};
