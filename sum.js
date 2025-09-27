function sum(str, n, ...args) {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s += +args[i];
  }
  return "№" + n + str + s;
}
alert(sum("Ваша сума: ", 12, 1, 2, 3, 4));
