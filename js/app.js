const calcForm = document.forms[0].elements;
const selectDropdown = document.querySelector('.select__dropdown');
const summaryTotal = document.querySelector('.summary__total');
const listItem = document.querySelector('.list__item');

selectDropdown.classList.add('open');
summaryTotal.classList.add('open');
listItem.classList.add('open');


console.log(calcForm);

console.log(calcForm.products);
console.log(calcForm.orders);
console.log(calcForm.accounting);
console.log(calcForm.terminal);