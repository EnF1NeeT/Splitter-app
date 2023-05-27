"use strict";

let tip, total, persons;
tip = 0;
const bill = document.querySelector("#bill");
const calcBtn = document.querySelector("#calc");
const tipBtns = document.querySelectorAll(".btn-tip");
const personInput = document.querySelector("#people-number");
const totalPerPerson = document.querySelector("#total-Person");
const tipPerPerson = document.querySelector("#tip-Person");
const customTip = document.querySelector("#tip");
const personError = document.querySelector("#person-error");
const billError = document.querySelector("#bill-error");

console.log(tipBtns);

//extract tip percentage
document.querySelector(".tips").addEventListener("click", function (e) {
  tipBtns.forEach((btn) => {
    btn.style.backgroundColor = "#00474b";
    btn.style.color = "#fff";
  });
  e.target.style.backgroundColor = "#9fe8df";
  e.target.style.color = "#00474b";
  tip = e.target.textContent;
  console.log("Tip - " + tip);
});

//extract number of persons
personInput.addEventListener("input", function () {
  persons = personInput.value;
  console.log("Persons - " + persons);
});

//calculate total bill
calcBtn.addEventListener("click", function () {
  checkErrors();
  total = (parseInt(bill.value) * parseInt(tip)) / 100 + parseInt(bill.value);
  console.log("Total bill - " + total);
  totalPerPerson.textContent = "$" + total / persons;
  tipPerPerson.textContent =
    "$" + (parseInt(bill.value) * parseInt(tip)) / 100 / persons;
});

//clear custom tip
customTip.addEventListener("click", function () {
  customTip.value = "";
  tip = 0;
});

//extract custom tip percentage
customTip.addEventListener("input", function () {
  tip = customTip.value;
  console.log("Custom tip - " + tip);
});

//check for errors
function checkErrors() {
  if (bill.value == "") {
    billError.style.display = "block";
  } else {
    billError.style.display = "none";
  }
  if (personInput.value == "") {
    personError.style.display = "block";
  } else {
    personError.style.display = "none";
  }
}
//reset
document.querySelector("#reset").addEventListener("click", function () {
  bill.value = "";
  personInput.value = "";
  customTip.value = "";
  tip = 0;
  totalPerPerson.textContent = "$0.00";
  tipPerPerson.textContent = "$0.00";
  tipBtns.forEach((btn) => {
    btn.style.backgroundColor = "#00474b";
    btn.style.color = "#fff";
  });
});
