
let n = 13

if (n < 2) {
  console.log(n, "is neither prime nor composite.")
} else {
  let isPrime = true

  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false
      break;
    }
  }

  if (isPrime) {
    console.log(n, "is a prime number.")
  } else {
    console.log(n, "is a composite number.")
  }
}
