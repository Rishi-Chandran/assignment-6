let str = "Hello World"

let vowelsCount = 0
let consonantsCount = 0

for (let i = 0; i < str.length; i++) {
  let letter = str[i]  

  if ((letter >= 'A' && letter <= 'Z') || (letter >= 'a' && letter <= 'z')) {
    if (
      letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U' ||
      letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
    ) {
      vowelsCount = vowelsCount + 1
    } else {
      consonantsCount = consonantsCount + 1
    }
  }
}

console.log("Number of vowels: " + vowelsCount)
console.log("Number of consonants: " + consonantsCount)
