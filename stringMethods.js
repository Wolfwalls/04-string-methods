let myName = "Glen Sheldon."
console.log(myName.charAt(0));
console.log(myName[0]);

//find where the . is

console.log(myName.indexOf("."));
//find the last occurance of one
console.log(myName.lastIndexOf("n"))

console.log(myName.length)

//remove leading and trailing whitespace

console.log(myName.trim())

//convert to new case

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// repeat

console.log(myName.trim().repeat(100))

//see if

console.log(myName.startsWith("G"))
console.log(myName.startsWith("L"))

console.log(myName.replace("e", "a"))

//replace all
console.log(myName.replaceAll("e", "a"))

let phone = "814-464-8636"
//replace dashes with

console.log(phone.replaceAll("-"," "))

//padding
console.log(myName.padStart(20,"*"))
console.log(myName.padEnd(20,"*"))
