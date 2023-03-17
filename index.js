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

    
    }, 0);
};
