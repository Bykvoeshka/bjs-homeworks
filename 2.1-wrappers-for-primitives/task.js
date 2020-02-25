'use strict';
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)){
      console.log(`Параметр <Процентная ставка> содержит неправильное значение ${percent}`);
    } else if(isNaN(contribution)){
      console.log(`Параметр <Начальный взнос> содержит неправильное значение ${contribution}`);
    } else if(isNaN(amount)){
      console.log(`Параметр <Общая стоимость> содержит неправильное значение ${amount}`);
    } 

    percent = parseInt(percent);
    contribution = parseInt(contribution);
    amount = parseInt(amount);
  
    let p = (percent / 12) / 100;
    let now = new Date();
    let months = (date - now) / 2592000000;
    months = Math.ceil(months);
    
    let monthly_payment = amount * ((p + p)/ ((Math.pow(1 + p, months)) - 1));
    let totalAmount = (monthly_payment * months) - contribution;
    return totalAmount.toFixed(2);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let nameValue;
    
    if (name === null || name === undefined || name === "") {
    nameValue = "Аноним";
  } else {
    nameValue = name;
  }

    let greeting = `Привет, мир! Меня зовут ${nameValue}.`;
    console.log(greeting);
    return greeting;
}
