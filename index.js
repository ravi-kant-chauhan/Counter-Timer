const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1")
const counterTimer = document.querySelector(".counterTimer");

const second = 1000,
    minute = 60 * second, 
    hour = 60 * minute,
    day = 24 * hour;

const timerFunction = () => {
    let now = new Date(),
        dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear();

    now = `${mm}/${dd}/${yyyy}`;

    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;

    if (now>targetDate)
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
    
    const intervalId = setInterval(() => {
        const timer  = new Date(targetDate).getTime();

        const today = new Date().getTime();

        const difference = timer - today;

        
    }, 0);
};
