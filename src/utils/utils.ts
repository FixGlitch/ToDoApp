import {
  eachDayOfInterval,
  endOfMonth,
  format,
  subMonths,
  addMonths,
  getDay,
} from 'date-fns';

export const generateDateGridForMonth = (month: Date) => {
  const monthDt = month;
  monthDt.setUTCDate(1);
  monthDt.setUTCHours(0, 0, 0, 0);
  const startDate = monthDt;
  const endDate = endOfMonth(monthDt);
  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

  const startDay = getDay(monthDt);
  const endDay = getDay(endDate);

  const prefixPaddingDays = [];
  const suffixPaddingDays = [];

  const prefixPaddingCount = startDay === 0 ? 6 : startDay - 1;
  const suffixPaddingCount = endDay === 0 ? 6 : 7 - endDay;

  for (let i = 0; i < prefixPaddingCount; i++) {
    prefixPaddingDays.push({ date: '', count: 0 });
  }

  for (let i = 0; i < suffixPaddingCount; i++) {
    suffixPaddingDays.push({ date: '', count: 0 });
  }

  const result = prefixPaddingDays
    .concat(
      daysInMonth.map((date) => ({
        date: format(date, 'yyyy-MM-dd'),
        count: 0,
      })),
    )
    .concat(suffixPaddingDays);

  return result;
};

export const getPreviousMonth = (month: Date) => subMonths(month, 1);
export const getNextMonth = (month: Date) => addMonths(month, 1);
