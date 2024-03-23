// /////////////////////////////////
const priceTableInputs = document.querySelectorAll(".price-table");
const input10 = document.querySelector(".input10");
const input11 = document.querySelector(".input11");
const input12 = document.querySelector(".input12");
const input13 = document.querySelector(".input13");
// /////////////////////////////////////////////////////////

// /////////////////////////////////
const btnUpdate1 = document.querySelector(".btn-update1");
const btnUpdate2 = document.querySelector(".btn-update2");
const btnUpdate3 = document.querySelector(".btn-update3");
const btnUpdate4 = document.querySelector(".btn-update4");
const btnUpdate5 = document.querySelector(".btn-update5");

btnUpdate1?.addEventListener("click", function () {
  priceTableInputs.forEach(function (input) {
    const inputName = input.dataset.input;
    const inputValue = input.textContent.trim();
    localStorage.setItem(inputName, inputValue);
  });
});

for (let i = 1; i <= 10; i++) {
  const inputKey = `input${i}`;
  const inputValue = localStorage.getItem(inputKey);
  const priceElement = document.querySelector(`.price${i}`);
  if (inputValue && priceElement) {
    priceElement.textContent = inputValue;
  }
}

btnUpdate2?.addEventListener("click", function () {
  const inputName = input10.dataset.price;
  const inputValue = input10.textContent.trim();
  localStorage.setItem(inputName, inputValue);
});
btnUpdate3?.addEventListener("click", function () {
  const inputName = input11.dataset.price;
  const inputValue = input11.textContent.trim();
  localStorage.setItem(inputName, inputValue);
});
btnUpdate4?.addEventListener("click", function () {
  const inputName = input12.dataset.price;
  const inputValue = input12.textContent.trim();
  localStorage.setItem(inputName, inputValue);
});
btnUpdate5?.addEventListener("click", function () {
  const inputName = input13.dataset.price;
  const inputValue = input13.textContent.trim();
  localStorage.setItem(inputName, inputValue);
});

function formatDate(inputDate) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Create a Date object from the inputDate string
  const dateObject = new Date(inputDate);

  // Get day of the week (0-6)
  const dayOfWeekIndex = dateObject.getDay();
  const dayOfWeek = days[dayOfWeekIndex];

  // Get day of the month (1-31)
  const dayOfMonth = dateObject.getDate();

  // Get month (0-11)
  const monthIndex = dateObject.getMonth();
  const month = months[monthIndex];

  // Construct the formatted date string
  const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;

  return formattedDate;
}

const dateBtn = document.querySelector(".date-btn");

dateBtn.addEventListener("click", function () {
  const dateInput = document.querySelector(".date-input").value;
  const date = formatDate(dateInput);
  localStorage.setItem("date", date);
});
