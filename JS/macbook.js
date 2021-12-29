let memory_1 = document.getElementById('memory-1');
let memory_2 = document.getElementById('memory-2');

let storage_1 = document.getElementById('storage-1');
let storage_2 = document.getElementById('storage-2');
let storage_3 = document.getElementById('storage-3');

let delivery_1 = document.getElementById('delivery-1');
let delivery_2 = document.getElementById('delivery-2');

let extra_memory_cost = document.getElementById('extra-memory-cost');
let extra_storage_cost = document.getElementById('extra-storage-cost');
let extra_delivery_cost = document.getElementById('extra-delivery-cost');
let total_cost = document.getElementById('total-cost');
let best_price = document.getElementById('best-price');

let promo_input = document.getElementById('promo-input');
let promo_button = document.getElementById('promo-button');

let total_price = document.getElementById('total-price');

let promo = false;

function calculateTotal() {
    let total = parseFloat(best_price.innerText) + parseFloat(extra_memory_cost.innerText) + parseFloat(extra_storage_cost.innerText) + parseFloat(extra_delivery_cost.innerText);
    total_cost.innerText = total;

    if (promo) {
        total = total - ((total * 20) / 100);
        promo = false;
    }

    total_price.innerText = total;
}

memory_1.addEventListener('click', function () {

    extra_memory_cost.innerText = 0;
    calculateTotal();
    memory_1.style.backgroundColor = 'aqua';
    memory_2.style.backgroundColor = 'white';


})

memory_2.addEventListener('click', function () {
    extra_memory_cost.innerText = 180;
    calculateTotal();
    memory_2.style.backgroundColor = 'aqua';
    memory_1.style.backgroundColor = 'white';


})

storage_1.addEventListener('click', function () {
    extra_storage_cost.innerText = 0;
    calculateTotal();
    storage_1.style.backgroundColor = 'aqua';
    storage_2.style.backgroundColor = 'white';
    storage_3.style.backgroundColor = 'white';

})

storage_2.addEventListener('click', function () {
    extra_storage_cost.innerText = 100;
    calculateTotal();
    storage_1.style.backgroundColor = 'white';
    storage_2.style.backgroundColor = 'aqua';
    storage_3.style.backgroundColor = 'white';
})

storage_3.addEventListener('click', function () {
    extra_storage_cost.innerText = 180;
    calculateTotal();
    storage_1.style.backgroundColor = 'white';
    storage_2.style.backgroundColor = 'white';
    storage_3.style.backgroundColor = 'aqua';
})

delivery_1.addEventListener('click', function () {
    extra_delivery_cost.innerText = 0;
    calculateTotal();
    delivery_1.style.backgroundColor = 'aqua';
    delivery_2.style.backgroundColor = 'white';

})

delivery_2.addEventListener('click', function () {
    extra_delivery_cost.innerText = 20;
    calculateTotal();
    delivery_1.style.backgroundColor = 'white';
    delivery_2.style.backgroundColor = 'aqua';
})

promo_button.addEventListener('click', function () {
    if (promo_input.value == 'stevekaku') {
        promo = true;
        calculateTotal();
    }
    promo_input.value = '';
})



