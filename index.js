
// Function expression called divide
function divide() {
    const result = 2000 / 100;
    console.log(result);
    return result;
  }
  
  // Arrow function called square
  const square = (x) => {
    const result = x * x;
    console.log(result);
    return result;
  };
  
  // Arrow function called add
  const add = (a, b) => {
    const result = a + b;
    console.log(result);
    return result;
  };
  
  // Call the functions
  divide();
  square(2);
  add(3, 4);