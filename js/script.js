// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// appear when guest list is full for guest to select a dish
const assignButton = document.querySelector(".assign");
// targets the list of dish with guest name
const assignedItems = document.querySelector(".assigned-items");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;

  if (guest !== "") {
    addToList(guest);
  }
  updateGuestCount();
  clearInput();
});

const clearInput = function () {
  guestInput.value = "";
};

const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  };
};

const assignItems = function () {
  const potluckItems = [
    "Potato Salad",
    "Hummus",
    "Fruit",
    "Black-Eyed Pea Salad",
    "Pinneaple Salsa",
    "Veggie Nori Rolls",
    "Peanut Butter Chocolate Energy Bars",
    "Roasted Chicken",
    "Baked Ziti",
    "Chicken Wings",
    "Garlic Butter Baked Salmon",
    "Garden Salad",
    "Lemon Cream Icebox Cake",
    "Stuffed Peppadews with Salami and Parmesan"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    //console.log(listItem);
    assignedItems.append(listItem);
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  assignItems();
  assignButton.disabled = true;
});
