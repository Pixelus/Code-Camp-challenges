function factorialize(num) {
  // Factorial formula
  var factorial = 1;
  for(var i = 1; i <= num; i++) {
    factorial = i * factorial;
  }
   return factorial;
}

factorialize(5);
