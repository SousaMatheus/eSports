
export function convertHourStringToMinutes(hourString : string){
  const [hours, minutes] = hourString.split(':').map(Number)

  const minuteAmont = (hours * 60) + minutes;

  return minuteAmont;
}