function reverseString(str) {
  // Put string in array
  var arrayString = str.split('');
  // Reverse the array
  var rev = arrayString.reverse();
  // Join caracters in a string
  var finalString = rev.join('');
  
  return finalString;
}

reverseString("hello");