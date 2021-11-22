import dayjs from "dayjs";

export const getMonth = (month = dayjs().month()) => {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysArray = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
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

export const btnAction = () => {
  const saveAction = (saving) => {
    if (!saving) return "Save";
    else return "Saving";
  };
  const updateAction = (updating) => {
    if (!updating) return "Update";
    else return "Updating";
  };

  return { saveAction, updateAction };
};
