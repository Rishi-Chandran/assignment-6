let str = "rishi"
let reversed = ""


for (let i = str.length - 1; i >= 0; i--) {
  reversed = reversed + str[i]
}

console.log("Original string:", str)
console.log("Reversed string:", reversed)
