function hello(user, str = "") {
  // За значенням - створюється копія
  // let admin = "Nicol"; // Локальна змінна, народилася і померла тут
  // user = "Peter";
  //   if (str !== undefined) {
  //     alert(`Hello ${user}, ${str}!`);
  //   } else {
  //     alert(`Hello ${user}!`);
  //   }
  //alert(`Hello ${user}, ${str}!`);
  alert(`Today the admin is ${admin}`); 
  return `Hello ${user}, ${str}!`;
}

const user = "John"; // Глобальна змінна
const admin = "Nicol"; // Глобальна змінна

alert(hello(user, "Have a good day!"));
//hello(admin);

//alert(admin);
