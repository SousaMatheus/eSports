export function convertMinutesStringToHour (minuteAmont : number){
  const hours = Math.floor(minuteAmont /60);
  const minutes = (minuteAmont % 60);

  return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}`;
}