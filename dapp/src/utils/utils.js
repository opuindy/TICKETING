import TicketType from '../components/Dashboard/TicketType';

export const getAmount = function getAmount(ticketType) {
  switch (ticketType) {
    case 'voucher':
      return { cryptoValue: '0.02ETH', value: '0.02' };
    case 'meal ticket':
      return { cryptoValue: '0.01ETH', value: '0.01' };
    default:
      return '';
  }
};

export const convertToUnix = function converter(days) {
  const dayNum = Number(days.slice(0, 1));
  const unixTime = Math.floor(dayNum * 86400 + 0); // convert the number of days to Unix time (in seconds)
  console.log(unixTime); // output the Unix time value to the console
  return unixTime;
};
