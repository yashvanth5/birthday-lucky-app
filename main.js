const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const checkNo = document.querySelector("#check-number");
const outPutBox = document.querySelector("#output-box");

function compareValues(sum, luckyNo) {
    if (sum % luckyNo === 0) {
        outPutBox.innerText = ("your birthday is lucky 🤩 ");
    } else {
        outPutBox.innerText = ("your birth day is not lucky 😢 ")
    }

}


function checkBdIsLucky() {
    // Get the values of the dateOfBirth and luckyNo inputs
    const dob = dateOfBirth.value;
    const luckyNum = luckyNo.value;
  
    if (dob && luckyNum) {
      // Calculate the sum of the DOB
      const sum = calculateSum(dob);
      compareValues(sum, Number(luckyNum));
    } else {
      outPutBox.innerText = "please enter both the fields 🤨 ";
    }
  }

function calculateSum(dob) {
    dob = dob.replace(/-/g, "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }

    return sum;

}







checkNo.addEventListener('click', checkBdIsLucky)