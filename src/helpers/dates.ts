const numToMonth = (num: number) => {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  return months[num - 1];
};

export default numToMonth;
