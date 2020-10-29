const numberOfInputs = document.querySelectorAll('.calc__form .form__input');
const selectPackage = document.querySelector('div.select__input');
const displayPackage = document.querySelector('div.calc__select');
const package = document.querySelectorAll('li[data-value]');
const packageFlag = document.querySelector('#package');
const checkInputs = document.querySelectorAll('[type="checkbox"]');
let productsPrice = 1.50;
let ordersPrice = 25.00;
let basicPrice = 10;
let professionalPrice = 20;
let premiumPrice = 40;
let accountingPrice = 30;
let terminalPrice = 55;
let totalPrice = 0;
let prevProductsPrice = 0;
let prevOrdersPrice = 0;
let actualProductsPrice = 0;
let actualOrdersPrice = 0;
let diffProductsPrice;
let diffOrdersPrice;
let elPrice;
for (item of numberOfInputs) {
    item.addEventListener('input', (e) => {
        prevProductsPrice = actualProductsPrice;
        prevOrdersPrice = actualOrdersPrice;
        console.log(e.target.value);
        (e.target.id === 'products') ? (elPrice = productsPrice) : (elPrice = ordersPrice);
        if (e.target.value !== null || e.target.value >= 1 || e.target.value !== '') {
            actualPrice = e.target.value * elPrice;
            document.querySelector(`[data-id="${e.target.id}"] span.item__calc`).innerText = `${e.target.value}*$${elPrice.toFixed(2)}`;
            document.querySelector(`[data-id="${e.target.id}"] span.item__price`).innerText = `$${actualPrice.toFixed(2)}`;
            (e.target.id === 'products') ? (actualProductsPrice = actualPrice) : (actualOrdersPrice = actualPrice);
            diffProductsPrice = actualProductsPrice - prevProductsPrice;
            diffOrdersPrice = actualOrdersPrice - prevOrdersPrice;
            (e.target.id === 'products') ? (updatePrice(diffProductsPrice)) : (updatePrice(diffOrdersPrice));
            document.querySelector(`[data-id="${e.target.id}"]`).classList.add('open');
        } else {
            (e.target.id === 'products') ? (updatePrice(-prevProductsPrice)) : (updatePrice(-prevOrdersPrice));
            document.querySelector(`[data-id="${e.target.id}"]`).classList.remove('open');
        }
    })
}
selectPackage.addEventListener('click', (e) => {
    displayPackage.classList.add('open');
})
for (item1 of package) {
    item1.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        displayPackage.classList.remove('open');
        selectPackage.innerText = e.target.innerText;
        document.querySelector('[data-id="package"] span.item__calc').innerText = e.target.innerText;
        if (packageFlag.dataset.value === 'basic') updatePrice(-basicPrice);
        else if (packageFlag.dataset.value === 'professional') updatePrice(-professionalPrice);
        else if (packageFlag.dataset.value === 'premium') updatePrice(-premiumPrice);
        if (e.target.dataset.value === 'basic') {
            document.querySelector('[data-id="package"] span.item__price').innerText = `$${basicPrice.toFixed(2)}`;
            updatePrice(basicPrice);
        } else if (e.target.dataset.value === 'professional') {
            document.querySelector('[data-id="package"] span.item__price').innerText = `$${professionalPrice.toFixed(2)}`;
            updatePrice(professionalPrice);
        } else {
            document.querySelector('[data-id="package"] span.item__price').innerText = `$${premiumPrice.toFixed(2)}`;
            updatePrice(premiumPrice);
        }
        packageFlag.dataset.value = e.target.dataset.value;
        document.querySelector('[data-id="package"]').classList.add('open');
    })
}
for (let item2 of checkInputs) {
    item2.addEventListener('change', (e) => {
        document.querySelector(`[data-id="${item2.id}"]`).classList.toggle('open');
        let price;
        (e.target.id === 'accounting') ? (price = accountingPrice) : (price = terminalPrice);
        document.querySelector(`[data-id="${e.target.id}"] .item__price`).innerText = `$${price.toFixed(2)}`;
        (e.target.checked) ? updatePrice(price): updatePrice(-price);
    });
}

function updatePrice(price) {
    totalPrice += price;
    document.querySelector('#total-price').classList.add('open');
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
}