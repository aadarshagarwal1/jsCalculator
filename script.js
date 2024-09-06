let oldExp = "";
let newNum = 0;
let res = 0;
let buttonClear = document.getElementById("buttonClear");
let buttonBracket = document.getElementById("buttonBracket");
let buttonPercentage = document.getElementById("buttonPercentage");
let buttonDivide = document.getElementById("buttonDivide");
let buttonSeven = document.getElementById("buttonSeven");
let buttonEight = document.getElementById("buttonEight");
let buttonNine = document.getElementById("buttonNine");
let buttonMulitply = document.getElementById("buttonMulitply");
let buttonFour = document.getElementById("buttonFour");
let buttonFive = document.getElementById("buttonFive");
let buttonSix = document.getElementById("buttonSix");
let buttonSubstract = document.getElementById("buttonSubstract");
let buttonOne = document.getElementById("buttonOne");
let buttonTwo = document.getElementById("buttonTwo");
let buttonThree = document.getElementById("buttonThree");
let buttonAdd = document.getElementById("buttonAdd");
let buttonSign = document.getElementById("buttonSign");
let buttonZero = document.getElementById("buttonZero");
let buttonDecimal = document.getElementById("buttonDecimal");
let buttonEqual = document.getElementById("buttonEqual");
let finalExp = "";
buttonClear.addEventListener("click", function () {
  console.log("loggedClear");
  document.getElementById("expression").innerText = "";
  oldExp = "";
  newNum = 0;
});
buttonBackSpace.addEventListener("click", function () {
  console.log("loggedBack");
  document.getElementById("expression").innerText = document
    .getElementById("expression")
    .innerText.substring(
      0,
      document.getElementById("expression").innerText.length - 1
    );
  oldExp = "";
  newNum = 0;
});
buttonSeven.addEventListener("click", function () {
  console.log("logged7");
  oldExp += "7";
  document.getElementById("expression").innerText = oldExp;
});
buttonEight.addEventListener("click", function () {
  console.log("logged8");
  oldExp += "8";
  document.getElementById("expression").innerText = oldExp;
  newNum = 8;
});
buttonNine.addEventListener("click", function () {
  console.log("logged9");
  oldExp += "9";
  document.getElementById("expression").innerText = oldExp;
  newNum = 9;
});
buttonFour.addEventListener("click", function () {
  console.log("logged4");
  oldExp += "4";
  document.getElementById("expression").innerText = oldExp;
  newNum = 4;
});
buttonFive.addEventListener("click", function () {
  console.log("logged5");
  oldExp += "5";
  document.getElementById("expression").innerText = oldExp;
  newNum = 5;
});
buttonSix.addEventListener("click", function () {
  console.log("logged6");
  oldExp += "6";
  document.getElementById("expression").innerText = oldExp;
  newNum = 6;
});
buttonOne.addEventListener("click", function () {
  console.log("logged1");
  oldExp += "1";
  document.getElementById("expression").innerText = oldExp;
  newNum = 1;
});
buttonTwo.addEventListener("click", function () {
  console.log("logged2");
  oldExp += "2";
  document.getElementById("expression").innerText = oldExp;
  newNum = 2;
});
buttonThree.addEventListener("click", function () {
  console.log("logged3");
  oldExp += "3";
  document.getElementById("expression").innerText = oldExp;
  newNum = 3;
});
buttonZero.addEventListener("click", function () {
  console.log("logged0");
  oldExp += "0";
  document.getElementById("expression").innerText = oldExp;
  newNum = 0;
});
buttonDzero.addEventListener("click", function () {
  console.log("logged00");
  oldExp += "00";
  document.getElementById("expression").innerText = oldExp;
  newNum = 0;
});
buttonDecimal.addEventListener("click", function () {
  console.log("loggedDecimal");
  if (oldExp.slice(-1) === ".") {
  } else if (
    (oldExp.slice(-1) === "+") |
    (oldExp.slice(-1) === "-") |
    (oldExp.slice(-1) === "×") |
    (oldExp.slice(-1) === "÷") |
    (oldExp.slice(-1) === "%")
  ) {
    oldExp += "0.";
    document.getElementById("expression").innerText = oldExp;
  } else {
    oldExp += ".";
    document.getElementById("expression").innerText = oldExp;
    newNum = 0;
  }
});
buttonAdd.addEventListener("click", function () {
  console.log("loggedAdd");
  repeatChecker("+");
});
buttonSubtract.addEventListener("click", function () {
  console.log("loggedSubtract");
  repeatChecker("-");
});
buttonMultiply.addEventListener("click", function () {
  console.log("loggedMultiply");
  repeatChecker("×");
});
buttonDivide.addEventListener("click", function () {
  console.log("loggedDivide");
  repeatChecker("÷");
});
buttonPercentage.addEventListener("click", function () {
  console.log("loggedPercentage");
  repeatChecker("%");
});
buttonEqual.addEventListener("click", function () {
  console.log("loggedEqual");
  finalExp = oldExp.replaceAll("×", "*");
  finalExp = finalExp.replaceAll("÷", "/");
  finalExp = finalExp.replaceAll("%", "*0.01*");
  console.log(finalExp);
  oldExp = eval(finalExp);
  oldExp = limitDecimalPlaces(oldExp, 10);
  oldExp = oldExp.toString();
  document.getElementById("expression").innerText = oldExp;
});
function repeatChecker(str) {
  if (
    (oldExp.slice(-1) === "+") |
    (oldExp.slice(-1) === "-") |
    (oldExp.slice(-1) === "×") |
    (oldExp.slice(-1) === "÷") |
    (oldExp.slice(-1) === "%")
  ) {
    oldExp = oldExp.substring(0, oldExp.length - 1);
    oldExp += str;
    document.getElementById("expression").innerText = oldExp;
  } else if (oldExp.slice(-1) === "") {
  } else {
    oldExp += str;
    document.getElementById("expression").innerText = oldExp;
  }
}
function limitDecimalPlaces(number, maxDecimalPlaces) {
  // Convert the number to a string with desired decimal places
  let fixedNumber = number.toFixed(maxDecimalPlaces);

  // Trim trailing zeros if there are any
  fixedNumber = fixedNumber.replace(/(\.[0-9]*[1-9])0+$/, "$1");

  // Convert back to a number
  return parseFloat(fixedNumber);
}
