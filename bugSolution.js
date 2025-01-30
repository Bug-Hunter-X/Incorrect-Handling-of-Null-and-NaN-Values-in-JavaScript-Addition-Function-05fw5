function foo(a, b) {
  // Handle null values
  a = a === null ? 0 : a; //if a is null, set it to 0
  b = b === null ? 0 : b; //if b is null, set it to 0
  
  // Handle NaN values
  a = isNaN(a) ? 0 : a; //if a is NaN, set it to 0
  b = isNaN(b) ? 0 : b; //if b is NaN, set it to 0

  return a + b; 
} 