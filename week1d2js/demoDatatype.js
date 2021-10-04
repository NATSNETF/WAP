const foo = 45;
console.log(typeof foo ==="number");
const bar = "" + foo;
const bar2 = "" + 108;
const bar3 = foo.toString();
const bar4 = 108..toString(); //need both periods after number
const bar5 = foo + "";
console.log(typeof foo === "number"); //true
console.log(typeof bar === "string"); //true
console.log(typeof bar2 === "string"); //true
console.log(typeof bar3 === "string"); //true
console.log(typeof bar4 === "string"); //true
console.log(typeof bar5 === "string"); //true

let str = 'Widget with id';
console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("G") ); // 1, "id" is found at the position 1 (..idget with id

console.log(str.lastIndexOf("i"));
console.log(str.includes("widget"));
let st1r = "stringify";
console.log( st1r.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log( st1r.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0

// et arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1); // from index 1 remove 1 element
// alert( arr ); // ["I", "JavaScript"

// //arr1.slice(start, end)
// let arr1 = ["t", "e", "s", "t"];
// console.log( arr.slice(1, 3) ); // ["e", "s"] (copy from 1 to 3)


let arr=[[1,2],[10,20]];
console.log(arr.concat([[3,4],[[5,6]]]));
// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(function(character,index){
    console.log(character,index)} );

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
console.log (`${item} is at index ${index} in ${array}`);
})

let are=[1,5,16,3,108];
are.forEach(function(item,index){
    if(item%2==0)
    console.log(item,index); //answer.16(2)...108(4)...
});

let ari=["i","study","javaScript","I"];
console.log(ari.slice(0,2));//returned arrey of removed elements
console.log(ari);
console.log(ari.splice(0,2));

//splice = remove 3 elements and replace them with the other two:
let arru = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
console.log(arru.splice(0, 3, "Let's", "dance"));
console.log(arru) // now ["Let's", "dance", "right", "now"]

let ww=["i","love","you"];
console.log(ww);
console.log(ww.splice(0,2,"i","hate",))
console.log(ww);
//////////////////////////////////////////
let arrr = ["I", "study", "JavaScript"];
// from index 2
// delete 0
// then insert "complex" and "language"
console.log(arr.splice(2, 0, "complex", "language"));
console.log( arrr ); // "I", "study", "complex", "language", "JavaScript"
