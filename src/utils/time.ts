export const intervalMinutes = 10;

export const intervalMinutesInMilSeconds = intervalMinutes * 60 * 1000;

export const minInMilSeconds = 60 * 1000;

export const hourInMilSeconds = 60 * minInMilSeconds;

export const dayInMilSeconds = 24 * hourInMilSeconds;

export function formatDate(timestamp: number) : string {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
