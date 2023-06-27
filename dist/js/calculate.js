// Utilities
function getInputValue(id) {
  let getInputValueElem = document.getElementById(id);
  const inputValue = parseFloat(getInputValueElem.value);
  getInputValueElem.value = "";
  return inputValue;
}

function getTextValue(id) {
  let getTextValueElem = document.getElementById(id);
  const TextValue = parseFloat(getTextValueElem.innerText);
  return TextValue;
}

function setTextValue(id, value) {
  let getElem = document.getElementById(id);
  getElem.innerText = value;
}

// Calculate Deposit
document.getElementById("deposit").addEventListener("click", () => {
  let getDepositAmount = getInputValue("inputDeposit");
  const getTotalDepositAmount = getTextValue("totalDeposit");
  const getTotalBalance = getTextValue("totalBalance");
  // Show Deposit Amount
  if (isNaN(getDepositAmount)) {
    alert("Please Input Valid Amount");
    return;
  } else {
    const totalDeposit = getTotalDepositAmount + getDepositAmount;
    const totalBalance = getTotalBalance + getDepositAmount;
    setTextValue("totalDeposit", totalDeposit);
    setTextValue("totalBalance", totalBalance);
  }
});

// Calculate Withdraw
document.getElementById("withdraw").addEventListener("click", () => {
  const getWithdrawAmount = getInputValue("inputWithdraw");
  const getTotalWithdrawAmount = getTextValue("totalWithdraw");
  const getTotalBalance = getTextValue("totalBalance");
  // Show Withdraw Amount
  if (isNaN(getWithdrawAmount)) {
    alert("Please Input Valid Amount");
    return;
  } else if (getWithdrawAmount > getTotalBalance) {
    alert("Insufficient Balance");
    return;
  } else {
    const currentWithdrawAmount = getTotalWithdrawAmount + getWithdrawAmount;
    const currentBalance = getTotalBalance - getWithdrawAmount;
    setTextValue("totalWithdraw", currentWithdrawAmount);
    setTextValue("totalBalance", currentBalance);
  }
});
