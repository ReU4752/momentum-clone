const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1"),
  meridiem = clockContainer.querySelector("h2");

function isMoring(hours) {
  return hours < 12 ? true : false;
}

function make12Hours(hours) {
  return hours > 12 ? hours - 12 : hours;
}

function getTime() {
  const date = new Date();

  const hours = make12Hours(date.getHours());
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;

  meridiem.innerText = `${isMoring(date.getHours()) == true ? "am" : "pm"}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
