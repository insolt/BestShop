const productsInput = document.querySelector('#products');
const productsBar = document.querySelector('[data-id="products"]');

const ordersInput = document.querySelector('#orders');
const ordersBar = document.querySelector('[data-id="orders"]');

const selectPackage = document.querySelector('div.select__input');
const displayPackage = document.querySelector('div.calc__select');
const packageBar = document.querySelector('[data-id="package"]');

const basicPackage = document.querySelector('[data-value="basic"]');
const professionalPackage = document.querySelector('[data-value="professional"]');
const premiumPackage = document.querySelector('[data-value="premium"]');

const account = document.querySelector('#accounting');
const accontBar = document.querySelector('[data-id="accounting"]');
const terminal = document.querySelector('#terminal');
const terminalBar = document.querySelector('[data-id="terminal"]');

const summary = document.querySelector('#total-price');

let productsPrice = 0;
let ordersPrice = 0;
let basicPackagePrice = 0;
let professionalPackagePrice = 0;
let premiumPackagePrice = 0;
let accountPrice = 0;
let terminalPrice = 0;

let totalPrice = 0;

productsInput.addEventListener('change', function(e) {
    if (this.value === null || this.value < 1) {
        productsBar.classList.remove('open');
        totalPrice -= productsPrice;
    } else {
        productsBar.classList.add('open');
        document.querySelector('[data-id="products"] span.item__calc').innerText = `${this.value}*$0.50`;
        productsPrice = this.value * 0.5;
        totalPrice += productsPrice;
        document.querySelector('[data-id="products"] span.item__price').innerText = `$${productsPrice.toFixed(2)}`;
        summary.classList.add('open');
    }
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
})

ordersInput.addEventListener('change', function(e) {
    if (this.value === null || this.value < 1) {
        ordersBar.classList.remove('open');
        totalPrice -= ordersPrice;
    } else {
        ordersBar.classList.add('open');
        document.querySelector('[data-id="orders"] span.item__calc').innerText = `${this.value}*$1.50`;
        ordersPrice = this.value * 1.5;
        totalPrice += ordersPrice;
        document.querySelector('[data-id="orders"] span.item__price').innerText = `$${ordersPrice.toFixed(2)}`;
        summary.classList.add('open');
        summary.classList.add('open');
    }
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
})

selectPackage.addEventListener('click', function(e) {
    displayPackage.classList.add('open');
})

basicPackage.addEventListener('click', function(e) {
    displayPackage.classList.remove('open');
    selectPackage.innerText = `Basic`;
    document.querySelector('[data-id="package"] span.item__calc').innerText = `Basic`;
    basicPackagePrice = 10;
    document.querySelector('[data-id="package"] span.item__price').innerText = `$${basicPackagePrice.toFixed(2)}`;
    packageBar.classList.add('open');
    summary.classList.add('open');
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
    summary.classList.add('open');
})

professionalPackage.addEventListener('click', function(e) {
    displayPackage.classList.remove('open');
    selectPackage.innerText = `Professional`;
    document.querySelector('[data-id="package"] span.item__calc').innerText = `Professional`;
    professionalPackagePrice = 20;
    document.querySelector('[data-id="package"] span.item__price').innerText = `$${professionalPackagePrice.toFixed(2)}`;
    packageBar.classList.add('open');
    summary.classList.add('open');
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
    summary.classList.add('open');
})

premiumPackage.addEventListener('click', function(e) {
    displayPackage.classList.remove('open');
    selectPackage.innerText = `Premium`;
    document.querySelector('[data-id="package"] span.item__calc').innerText = `Premium`;
    premiumPackagePrice = 40;
    document.querySelector('[data-id="package"] span.item__price').innerText = `$${premiumPackagePrice.toFixed(2)}`;
    packageBar.classList.add('open');
    summary.classList.add('open');
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
    summary.classList.add('open');
})

account.addEventListener('click', function(e) {
    if (this.checked) {
        accountPrice = 35;
        totalPrice += accountPrice;
        document.querySelector('[data-id="accounting"] span.item__price').innerText = `$${accountPrice.toFixed(2)}`;
        accontBar.classList.add('open');
        summary.classList.add('open');
        summary.classList.add('open');
    } else {
        accontBar.classList.remove('open');
        totalPrice -= accountPrice;
    }
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
})

terminal.addEventListener('click', function(e) {
    if (this.checked) {
        terminalPrice = 60;
        document.querySelector('[data-id="terminal"] span.item__price').innerText = `$${terminalPrice.toFixed(2)}`;
        terminalBar.classList.add('open');
        summary.classList.add('open');
        summary.classList.add('open');
        totalPrice += terminalPrice;
    } else {
        terminalBar.classList.remove('open');
        totalPrice -= terminalPrice;
    }
    document.querySelector('#total-price span.total__price').innerText = `$${totalPrice.toFixed(2)}`;
})