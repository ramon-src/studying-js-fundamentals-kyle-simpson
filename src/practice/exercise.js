let bankAccount = 1000;
const items = {
  Phones: {
    Xiaomi: { price: 350, tax: 0.01 },
    iPhone: { price: 700, tax: 0.05 },
    Motorola: { price: 210, tax: 0.04 }
  },
  Acessories: {
    Cape: { price: 20, tax: 0.05 },
    Film: { price: 5, tax: 0.02 },
    Charger: { price: 40, tax: 0.03 }
  }
};

let purchasedItems = [];

function log(item) {
  purchasedItems.push(item);
}

function calculateTaxPrice(item) {
  return item.price * item.tax;
}

function calculatePrice(item) {
  return item.price + calculateTaxPrice(item);
}

function hasBalanceToSpend(item) {
  return bankAccount - calculatePrice(item) >= 0;
}

function pay(itemPrice) {
  bankAccount -= itemPrice;
}

function makeAPurchase(item) {
  const itemProps = items[item.category][item.name];
  purchase({ ...item, ...itemProps });
}

function moneyToPrint(value) {
  return `$${value.toFixed(2)}`;
}

function purchase(item) {
  if (hasBalanceToSpend(item)) {
    let itemPrice = calculatePrice(item);
    pay(itemPrice);
    log({ ...item, total: itemPrice });
  } else {
    alert(
      `You don't have balance for this purchase. ${moneyToPrint(bankAccount)}`
    );
    bankAccountBalance();
  }
}

function makeBalanceStatement() {
  let balanceText = "************ BALANCE STATEMENT *************\n";
  purchasedItems.forEach(function(item) {
    balanceText += `${item.category} - ${item.name}: $${item.price.toFixed(
      2
    )} / tax ${item.tax.toFixed(2)} / total: ${moneyToPrint(item.total)}\n
    `;
  });
  return balanceText;
}

function bankAccountBalance() {
  alert(makeBalanceStatement());
}

function makePhoneStore() {
  Object.keys(items).forEach(function(category) {
    let ul = document.createElement("ul");
    ul.innerHTML = category;
    Object.keys(items[category]).forEach(function(itemName) {
      let li = makeItemShelf(category, itemName);
      ul.appendChild(li);
    });

    document.body.appendChild(ul);
  });
  document.body.appendChild(makeShowBalanceButton());
  document.body.appendChild(makeResetButton());
}

function reset() {
  bankAccount = 1000;
  purchasedItems = [];
}

function makeShowBalanceButton() {
  return makeButton("Show balance", function() {
    bankAccountBalance();
  });
}

function makeResetButton() {
  return makeButton("Reset", function() {
    reset();
  });
}

function makeButton(text, callback) {
  let button = document.createElement("button");
  button.innerHTML = text;
  button.addEventListener("click", callback);
  return button;
}

function makeItemShelf(category, itemName) {
  let li = document.createElement("li");
  let button = makeBuyButton(category, itemName);
  let item = items[category][itemName];
  li.innerHTML = `${itemName}: $${item.price.toFixed(2)} 
        // tax ${item.tax.toFixed(2)}`;
  li.appendChild(button);
  return li;
}

function makeBuyButton(category, itemName) {
  let button = document.createElement("button");
  button.innerHTML = "Buy";
  button.addEventListener("click", function() {
    makeAPurchase({ category, name: itemName });
  });
  return button;
}

makePhoneStore();
