import { format } from "date-fns";

export const formatToMMDDYYYY = (date: string) => {
  const newDate = new Date(date);
  return format(newDate, "MM/dd/yyyy");
};

export const formatToHHMMA = (date: string) => {
  const newDate = new Date(date);
  return format(newDate, "hh:mm a");
};
