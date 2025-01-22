function foo(a, b) {
  // Explicit type checking:
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Invalid input';
  }
}

console.log(foo(1, '1')); // Output: Invalid input
console.log(foo(1, 1)); // Output: 2

// Alternative using Number():
function bar(a, b) {
  return Number(a) + Number(b);
}
console.log(bar(1, '1')); // Output: 2