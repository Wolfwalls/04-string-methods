let program = "Computer Programming";


let firstword = program.slice(0,8)
console.log(firstword)
let secondword = program.slice(9,20)
console.log(secondword)

//get the last character
let lastchar = program.slice(-1)
console.log(lastchar)

//dynamically get first AND SECOND word
let first = program.slice(0 , program.indexOf(" "));
console.log(first);
let second = program.slice(program.indexOf(" ")+1);
console.log(second);