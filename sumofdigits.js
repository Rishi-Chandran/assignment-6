let num = 13579
let sum = 0

while (num > 0) {
  let digit = num % 10
  sum = sum + digit
  num = (num - digit) / 10
}

console.log("Sum of digits is", sum)
