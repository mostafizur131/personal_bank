// Calculate Deposit
document.getElementById("deposit").addEventListener("click", () => {
  let getDepositAmountStr = document.getElementById("inputDeposit");
  const getDepositAmount = parseFloat(getDepositAmountStr.value);
  const getTotalDepositAmountStr = document.getElementById("totalDeposit");
  const getTotalDepositAmount = parseFloat(getTotalDepositAmountStr.innerText);
  const getTotalBalanceStr = document.getElementById("totalBalance");
  const getTotalBalance = parseFloat(getTotalBalanceStr.innerText);
  getDepositAmountStr.value = "";
  // Show Deposit Amount
  if (isNaN(getDepositAmount)) {
    alert("Please Input Valid Amount");
    return;
  } else {
    getTotalDepositAmountStr.innerText =
      getTotalDepositAmount + getDepositAmount;
    getTotalBalanceStr.innerText = getTotalBalance + getDepositAmount;
  }
});

// Calculate Withdraw
document.getElementById("withdraw").addEventListener("click", () => {
  let getWithdrawAmountStr = document.getElementById("inputWithdraw");
  const getWithdrawAmount = parseFloat(getWithdrawAmountStr.value);
  const getTotalWithdrawAmountStr = document.getElementById("totalWithdraw");
  const getTotalWithdrawAmount = parseFloat(
    getTotalWithdrawAmountStr.innerText
  );
  const getTotalBalanceStr = document.getElementById("totalBalance");
  const getTotalBalance = parseFloat(getTotalBalanceStr.innerText);
  getWithdrawAmountStr.value = "";
  // Show Withdraw Amount
  if (isNaN(getWithdrawAmount)) {
    alert("Please Input Valid Amount");
    return;
  } else if (getWithdrawAmount > getTotalBalance) {
    alert("Insufficient Balance");
    return;
  } else {
    getTotalWithdrawAmountStr.innerText =
      getTotalWithdrawAmount + getWithdrawAmount;
    getTotalBalanceStr.innerText = getTotalBalance - getWithdrawAmount;
  }
});
