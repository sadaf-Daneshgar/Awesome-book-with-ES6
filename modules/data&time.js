import { DateTime } from './Luxon.js';

const setDateTime = () => {
  const dateTimeElement = document.querySelector('#date-time');
  const footerYearElement = document.querySelector('#footer-year');

  const currentDateTime = DateTime.now();
  const formattedDateTime = currentDateTime.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  const currentYear = currentDateTime.year;

  dateTimeElement.innerHTML = formattedDateTime;
  footerYearElement.innerHTML = currentYear;
};

export default setDateTime;
