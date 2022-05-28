"use strict";

const hour_element = document.querySelector(".hours-number");
const minute_element = document.querySelector(".minutes-number");
const second_element = document.querySelector(".seconds-number");
const am_pm = document.querySelector(".am-pm");

function updateClock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let session = "AM";

    if (hour > 12) {
        hour -= 12;
    }

    if (hour >= 12) {
        session = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hour_element.innerText = hour;
    minute_element.innerText = minute;
    second_element.innerText = second;
    am_pm.innerText = session;
    setTimeout(updateClock, 1000);
}

updateClock();
