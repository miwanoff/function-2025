function animals(animal, n) {
  for (let i = 1; i <= n; i++) {
    document.writeln(`<img src="images/dog.jpeg" alt="">`);
    if (i == 10) {
      document.writeln("<br>");
    }
  }
}

animals("cat", 40);
