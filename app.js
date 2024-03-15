// 100

// function x2(input) {
//     var parts = input.split('*');
//     console.log(parts);
//     var tag = parts[0];
//     console.log(tag);
//     var count = parseInt(parts[1]);
//     // console.log(count);
//     var result = '';

//     for (var i = 0; i < count; i++) {
//         console.log(i);
//         result += '<' + tag + '></' + tag + '>';
//     }

//     return result;
// }

// console.log(x2("div*2")); 

// 101

// let son = +prompt("Son kiriting: ");
// function bir(son){
//     let count = 0;
//     for (let i = 1; i <= son; i++) {
//         count+=i
//     }
//     return count
// }
// console.log(bir(son));

// 102

// function obj2x(number, range) {
//     return number >= range.min && number <= range.max;
// }
// console.log(obj2x(4, { min: 0, max: 5 })); 

// 103

// function endWith(son){
//     let son2 = son**2
//     son2 = son2.toString();
//     return son2.endsWith(son)
// }
// let son = prompt("raqam ?")
// console.log(endWith(son));

// 104

// function namuna(arr){
//     let array = [];
//     arr.forEach((e,index) => {
//         array.push(e+index);
//     });
//     return array
// }
// console.log(namuna([1,2,3,4,5]));

// 105

// let arr = ["lemonade", "cola", "beer", "water", "fanta"];
// arr.concat()
// function drinks(arr){
//     let newArr = []
//      arr.forEach((e) => {
//         if(e=="fanta" || e=="cola"){
//         }
//         else{
//             newArr.push(e)
//         }
//      });
//      return newArr;
// }
// console.log(drinks(arr));

// 106

// function numberLength(son){
//     return son.length
// }
// console.log(numberLength(prompt("Raqam:")));

// 107

// function sorted(son){
//     son = son.split("");
//     son.sort((a, b) => b - a);
//     let kattaSon = son.join("");
//     return kattaSon;
// }
// console.log(sorted(prompt("raqam: ")));

// 108 

// function round(a,b){
//     return Math.round(Math.random()*(b-a)+a)
// }
// let a = +prompt("1-raqam: ")
// let b = +prompt("2-raqam: ")
// console.log(round(a, b));

// 109

// function Narissistik(a){
//     a = a.split("");
//     b = 0;
//     a.forEach((e) => {
//         b+=e**3
//     });
//     return a.join("")==b;
// }
// console.log(Narissistik(prompt("raqam :")));

// 110

// function kattaHarf(a){
//     count = 0;
//     a = a.split("");
//     a.forEach((e) => {
//         if(e == e.toUpperCase()){
//             count++
//         }
//     });
//     return count
// }
// console.log(kattaHarf(prompt("so'z kiriting: ")));
