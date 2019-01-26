

var a = 'aaaaa'
var b = 'baaaa'
var ar = Array.of(a,b);   
console.log(ar)
// [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
  

var arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(ar.flat(2))

let arr1 = [1, 2, 3, 4];

console.log(arr1.map(x => x * 2)); 

var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
console.log(f())