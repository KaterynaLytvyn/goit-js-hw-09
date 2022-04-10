import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startButtonElement = document.querySelector('[data-start]')
const dataDaysElement = document.querySelector('[data-days]')
const dataHoursElement = document.querySelector('[data-hours]')
const dataMinutesElement = document.querySelector('[data-minutes]')
const dataSecondsElement = document.querySelector('[data-seconds]')
startButtonElement.disabled = true;
let chosenDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (flatpickr.parseDate(selectedDates[0], "U") <= Date.now()) {
      startButtonElement.disabled = true;
      window.alert("Please choose a date in the future");
      return;
    }
    chosenDate = selectedDates[0];
    startButtonElement.disabled = false;
  },
};

const calendar = flatpickr("#datetime-picker", options);

startButtonElement.addEventListener("click", onClick)

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2,"0")
}

function onClick() {
  const timerId = setInterval(()=>{
    const timeLeft = convertMs(chosenDate.getTime()-Date.now());
    if (timeLeft.days == 0 && timeLeft.hours == 0 && timeLeft.minutes == 0 && timeLeft.seconds == 0) {
      clearInterval(timerId);
    }
    dataDaysElement.textContent = addLeadingZero(timeLeft.days);
    dataHoursElement.textContent = addLeadingZero(timeLeft.hours);
    dataMinutesElement.textContent = addLeadingZero(timeLeft.minutes);
    dataSecondsElement.textContent = addLeadingZero(timeLeft.seconds);
  }, 1000)

  startButtonElement.disabled = true;
}






