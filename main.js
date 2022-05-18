{
  /* <script> */
}
const numberButtons = document.querySelectorAll(".button-div button.number");
const signButtons = document.querySelectorAll(".button-div button.sign");
const displayScreen = document.querySelector(".calculating-numbers");
const displaySignScreen = document.querySelector(".calculator-display .sign");
const dot = document.querySelector(".dot");
const themeForm = document.querySelector("#themeForm");
const themeFormCheckBoxes = document.querySelectorAll("#themeForm input");

const themeFormMainDiv = document.querySelector(".calculator-main-div");
console.dir(themeFormCheckBoxes);

function uncheckAll() {
  var elements = document.getElementsByTagName("input");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type == "radio") {
      // console.log(elements[i]);
      elements[i].checked = false;
    }
  }
}

// work on the theme

function checkMe() {
  for (let i = 0; i < themeFormCheckBoxes.length; i++) {
    const element = themeFormCheckBoxes[i];

    if (element.checked === true) {
      element.checked = true;
      // console.log(element);
      return element;
    }
  }
}

themeFormCheckBoxes.forEach((checkBox, i) => {
  checkBox.addEventListener("click", (e) => {
    // uncheckAll()
    console.log(checkMe().value);
    themeFormMainDiv.setAttribute("theme", checkMe().value);
    console.log(themeFormMainDiv.getAttribute("theme"));
  });
});

// themeFormCheckBoxes.forEach((checkBox, i) => {

//   // checkBox[i].addEventListener('click', e => {
//   //   console.log(e);
//   // })
//   checkBox.addEventListener('click', e => {
//     e.preventDefault()
//     // console.log(checkBox[i]);
//     // checkBox[i].checked = true

//     // var radio = document.querySelector('input[type=radio][name=language]:checked'
//     uncheckAll()
//     // e.checked = true
//     // console.log(e.target)
//     // console.dir(e.target.attributes);
//     // let a = e.target.setAttribute("checked", true);

//     // console.log(a);

//   })
// })

let currentSign = "";
let prevCalculation = "";
let currentCalculation = "";
let currentFigure = "";

function calculate() {
  if (currentSign === "") {
    // currentCalculation = currentFigure
    // console.log(currentCalculation);
    return currentCalculation;
  }
  // if (currentSign != '+' || currentSign != '-' || currentSign != '*' || currentSign != '/') {
  if (
    currentSign != "+" &&
    currentSign != "-" &&
    currentSign != "*" &&
    currentSign != "/"
  ) {
    console.log("Incorrect Operator");
    return;
  }

  switch (currentSign) {
    case "+":
      currentCalculation = Number(currentCalculation) + Number(currentFigure);
      currentFigure = "";
      return Number(currentCalculation);
      break;

    case "-":
      currentCalculation = Number(currentCalculation) - Number(currentFigure);
      currentFigure = "";
      return Number(currentCalculation);
      break;

    case "*":
      currentCalculation = Number(currentCalculation) * Number(currentFigure);
      currentFigure = "";
      return Number(currentCalculation);
      break;

    case "/":
      currentCalculation = Number(currentCalculation) / Number(currentFigure);
      currentFigure = "";
      return parseFloat(currentCalculation);
      break;
    // default:
    //   break;
  }
}

function calculatorAnswer() {
  console.log(
    `currentCalculation ${currentCalculation} ${currentSign} ${currentFigure} = ${calculate()}`
  );
  const answer = parseFloat(calculate());

  prevCalculation = currentCalculation;

  // currentCalculation = ''
  // displaySignScreen.innerHTML = ''
  displayScreen.innerHTML = "";
  displaySignScreen.innerHTML = "=";
  displayScreen.innerHTML = answer;
  // console.log(calculate());
}

signButtons.forEach((sinBtn) => {
  sinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let textContent = e.target.textContent;

    if (currentSign === "") {
      currentSign = textContent;
      displaySignScreen.innerHTML = textContent;
    } else {
      currentSign = "";
      currentSign = textContent;
      displaySignScreen.innerHTML = textContent;
      currentCalculation = calculate();
      currentFigure = 0;
    }
  });
});

// get numbers from button
numberButtons.forEach((numBtn) => {
  numBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let textContent = e.target.textContent;

    const displayScreen = document.querySelector(".calculating-numbers");
    const fingerLength = displayScreen.innerText.length;

    if (fingerLength > 12) {
      console.log("text too log");
      return;
    }
    //  else {
    //   currentFigure = Number(displayScreen.innerText)
    // }
    // if sign variable is empty we know they are still writing the first set of numbers
    if (currentSign === "") {
      currentCalculation = `${Number(currentCalculation)}${Number(
        textContent
      )}`;
      // console.log(currentFigure);
      // if(currentCalculation)
      displayScreen.innerHTML = textContent;
      // displayScreen.innerHTML = `${parseFloat(currentCalculation)}${parseFloat(textContent)}`
      displayScreen.innerHTML = `${Number(currentCalculation)}`;
      console.log("first number");
    } else {
      // if sign variable is not empty we know they are  writing the second set of number set of numbers
      currentFigure = `${Number(currentFigure)}${Number(textContent)}`;
      // currentCalculation = currentFigure
      // console.log(currentCalculation);
      displaySignScreen.innerHTML = "";

      displayScreen.innerHTML = "";
      // displayScreen.innerHTML = textContent
      // displayScreen.innerHTML = `${parseFloat(currentFigure)}${parseFloat(textContent)}`
      displayScreen.innerHTML = `${Number(currentFigure)}`;
      // currentFigure = parseFloat(textContent)
      // currentFigure = `${parseFloat(currentFigure)}${parseFloat(textContent)}`
      currentFigure = `${Number(currentFigure)}`;

      // console.log(currentCalculation + ` ${currentSign} `
      //   + currentFigure);
      console.log("seconds number");
    }
  });
});

function resetCalculator() {
  currentSign = "";
  currentCalculation = "";
  currentFigure = "";
  displayScreen.innerHTML = 0;
  displaySignScreen.innerHTML = "";
}

function deleteButton() {
  // let newCurrentFigure = currentFigure.toString().slice(0, -1)
  if (currentFigure === "") {
    let newCurrentCalculation = currentCalculation.toString().slice(0, -1);
    currentCalculation = newCurrentCalculation;
    console.log(newCurrentCalculation);

    displayScreen.innerHTML = currentCalculation;
    return;
  }
  console.log("currentFigure is not empty", currentFigure);
  let newCurrentFigure = currentFigure.toString().slice(0, -1);
  currentFigure = newCurrentFigure;
  displayScreen.innerHTML = newCurrentFigure;
  console.log(newCurrentFigure);
  // currentFigure = newCurrentFigure
}
// </script>
