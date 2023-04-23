export const renderLocation = (location: string) => {
  const locationArray = location.split(',');
  return `${locationArray[1]} ${locationArray[0]}, ${locationArray[locationArray.length - 1]}`;
};
