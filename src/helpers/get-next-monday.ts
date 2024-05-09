import dayjs from "dayjs";

export const getNextMonday = () => {
  const today = dayjs();
  const nextMonday = today.day(8);

  return nextMonday.format("M월 D일");
};
