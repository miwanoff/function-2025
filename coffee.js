"use scrict";

let drinksPrice = {
  latte: 60,
  cocoa: 50,
  tea: 30,
};

function coffee(...drinks) {
  let bill = "";
  for (const drink in drinks) {
    // if (!Object.hasOwn(drinks, drink)) continue;
    const element = drinks[drink];
    bill += `${element} `;
  }
  return bill;
}

alert(coffee("latte", "tea", "cocoa"));
