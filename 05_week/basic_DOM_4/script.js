// Objective: Implement JavaScript functionality for a pancake customization tool that dynamically updates the price based on user selections, such as pancake type, toppings, and extras. HTML and CSS are provided; your task is to add the JavaScript to make it interactive.

// Your task is to write the JavaScript code that:

// Listens for changes on the pancake type select box and all checkbox inputs.
// Calculates the total price based on selections:
// Pancake type has a base price.
// Each topping adds $1 to the base price.
// Extras have their specific prices.
// Displays the dynamically updated total price in the #totalPrice span.
// Use the addEventListener method for listening to changes and the forEach method for iterating through checkbox inputs to calculate the total price. Remember to parse checkbox values as integers before adding them to the total.

const form = document.querySelector('.form-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector('#type');
const button = document.querySelector('button');

let total;
let toppings = [];
let extras = [];
const totalPriceElement = document.querySelector('#totalPrice');

const pancakePriceCalc = () => {
  const priceBanner = document.querySelector('.price-banner');

  total = parseInt(typeSelect.value);

  checkToppings();

  priceBanner.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }, { transform: ' scale(1)' }], {
    duration: 100,
    iterations: 1,
  });
};

const addItem = (itemName, category) => {
  if (category === 'toppings') {
    toppings.push(itemName);
  } else {
    extras.push(itemName);
  }
};

const checkToppings = () => {
  toppings = [];
  extras = [];
  for (const item of checkboxes) {
    const itemName = item.dataset.name;
    const category = item.dataset.category;
    if (item.checked) {
      total += parseInt(item.value);
      addItem(itemName, category);
    } 
  }
  totalPriceElement.textContent = `$${total}`;
};

const displayOrder = () => {
  const customerName = document.querySelector('#customerName').value;
  const orderType = document.querySelector('#order_type');
  const orderToppings = document.querySelector('#order_toppings');
  const orderExtras = document.querySelector('#order_extras');
  const orderName = document.querySelector('#order_name');
  const orderPrice = document.querySelector('#order_price');
  orderName.textContent = customerName;
  orderType.textContent = typeSelect.selectedOptions[0].text;
  orderToppings.textContent = toppings;
  orderExtras.textContent = extras;
  orderPrice.textContent = total;
};

form.addEventListener('change', pancakePriceCalc);
button.addEventListener('click', displayOrder);