let str = "amma"
let isPalindrome = true
let length = str.length

for (let i = 0; i < length / 2; i++) {
  if (str[i] !== str[length - 1 - i]) {
    isPalindrome = false
    break
  }
}

if (isPalindrome) {
  console.log(str + " is a palindrome.")
} else {
  console.log(str + " is not a palindrome.");
}
