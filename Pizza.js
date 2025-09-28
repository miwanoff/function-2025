const pizzas = ["піца з грибами", "піца з куркою і ананасом"];

function orderingPizza(num, n) {
  let pizza = pizzas[num - 1];
// if () {
//     return `Error`
// }
// switch (num){
//     case 1: ... break;
//     case 2: ... break;
//     default: `Error`
// }
  return `Ваше замовлення: ${pizza} - ${n}шт.`;
}

//const resp = orderingPizza(prompt("Input num from 1 to 2"), prompt("Input n"));
alert(orderingPizza(prompt("Input num from 1 to 2"), prompt("Input n")));
