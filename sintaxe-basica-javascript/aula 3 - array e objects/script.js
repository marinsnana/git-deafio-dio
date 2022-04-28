// o que são vetores ou arrays

// como declarar array
/* let array = ["string", 1, true]
console.log(array) */

// pode guardar varios tipos de dados
let array = ["string", 1, true, ["array1"], ["array2"], ["array3"], ["array4"]];
/* console.log(array); */

/* // forEach
array.forEach(function(item, index){console.log(item, index)}); */

/* // push
array.push(["array5"])
console.log(array) */

/* // pop
array.pop();
console.log(array); */

/* // shift
array.shift();
console.log(array) */

/* // unshift
array.unshift("novo item");
console.log(array) */

/* // indexOf
console.log(array.indexOf(true)); */

/* // splice
array.splice(0, 3)
console.log(array) */

/* let novoArray = array.slice (0, 3)
console.log(novoArray) */


// manipulando objetos
let object = { string: "string", number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: "objeto interno"}};
console.log(object)

// desestruturação de objetos
var string = object.string;
console.log(string)

var arrayInterno = object.array
console.log(arrayInterno)

var { string, boolean, objectInterno} = object
console.log(string, boolean, objectInterno)



