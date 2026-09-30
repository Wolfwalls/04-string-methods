// strivt equality
// about the "="
//one is assignment (stores a value in a variable)
// two compares valus but ignores data type
// THREE compares values and data type
const pi = 3.14;
console.log("==")
if(pi == "3.14"){
    console.log("thats pi")
}else{
    console.log("that is not pi")
}
console.log("===")
if(pi === "3.14"){
    console.log("thats pi")
}else{
    console.log("that is not pi") // data types dont match
}


// strict inequality
console.log("!==")
if(pi !== "3.14"){
    console.log("thats not pi")// returned if data types or data doesn't match
}else{
    console.log("that is pi") // data types dont match
}

// strict inequality
console.log("!=")
if(pi != "3.14"){
    console.log("thats not pi")// returned if data doesn't match, doesn't check datatype
}else{
    console.log("that is pi") // data types dont match
}