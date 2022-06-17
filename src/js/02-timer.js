import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

// Variables

const dateInput = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('button[data-start]');
const dateDays = document.querySelector('.value[data-days]');
const dateHours = document.querySelector('.value[data-hours]');
const dateMinutes = document.querySelector('.value[data-minutes]');
const dateSeconds = document.querySelector('.value[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (calendar.selectedDates[0] <= Date.now()) {
      Notify.failure('Please choose a date in the future');
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

//

// Functions

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

const updateCount = ({ days, hours, minutes, seconds }) => {
  dateDays.textContent = `${days}`;
  dateHours.textContent = `${hours}`;
  dateMinutes.textContent = `${minutes}`;
  dateSeconds.textContent = `${seconds}`;
};

const start = () => {
  const futureDate = new Date(calendar.selectedDates[0]);
  setInterval(() => {
    const currentDate = Date.now();
    const countDown = futureDate - currentDate;
    const transformedTime = convertMs(countDown);
    if (countDown < 1000) {
      dateSeconds.textContent = '00';
      return;
    }
    updateCount(transformedTime);
    startButton.disabled = true;
  }, 1000);
};

//

startButton.addEventListener('click', start);

const calendar = flatpickr(dateInput, options);
