
// function count() {
//     array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

//     array_elements.sort()
// console.log(array_elements.sort())
//     var current = null;
//     var cnt = 0;
//     for (var i = 0; i < array_elements.length; i++) {
//         if (array_elements[i] != current) {
//             if (cnt > 0) {
//                 console.log(current + ' comes --> ' + cnt + ' times ')
//             }
//             current = array_elements[i];
//             cnt = 1;
//         } else {
//             cnt++;
//         }
//     }
//     if (cnt > 0) {
//        console.log(current + ' comes --> ' + cnt + ' times')
//     }

// }
//count()
// var array = ['1', '', 'c','',''];

// array = array.filter(str =>/\S/.test(str))

// console.log(array)

// uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"]
// var  count = {}
// uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1})
// console.log(count)

var a = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
var uniqueNames = [];
uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})
console.log(uniqueArray)