// select ids

const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const depositField = document.getElementById("deposit-field");
const withdrawField = document.getElementById("withdraw-field");
const addMoney = document.getElementById("add-money");
const removeMoney = document.getElementById("remove-money");
const totalMoney = document.getElementById("increament-money");

console.log(depositBtn, withdrawBtn, depositField, withdrawField);

// events
depositBtn.addEventListener("click", deposit);
withdrawBtn.addEventListener("click", withdraw);

// functions
function deposit() {
    const newMoney = parseFloat(depositField.value);
    const currentMoney = parseFloat(addMoney.innerText) + newMoney;
    addMoney.innerText = currentMoney;

    totalMoney.innerText = parseFloat(totalMoney.innerText) + newMoney;
    depositField.value = "";
}
function withdraw() {
    const money = parseFloat(withdrawField.value);
    removeMoney.innerText = parseFloat(removeMoney.innerHTML) + money;

    totalMoney.innerText = totalMoney.innerText - money;
    withdrawField.value = "";
}
