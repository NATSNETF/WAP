//conver string to an integer

let text = 34.8
let integer = parseInt(text);
console.log("conver to integer "+ integer);
//tofix.
let num = 12.36;
console.log("to fix "+ num.toFixed(5) ); // "12.3"
////////////////////////////
function circumference(r) {
    if (isNaN(parseFloat(r))) {
    return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
    }
    console.log(circumference('4.567abcdefgh'));
    // expected output: 28.695307297889173
    console.log(circumference('abcdefgh'));
    // expected output: 
    /////////////////

    let str = "Widget with id";
console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

console.log( "Widget with id".includes("Widget") ); // true
console.log( "Hello".includes("Bye") ); // false


let str2 = "good morning students how are you all doing ";
console.log(str2.length)
console.log(str2.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str2);
console.log( str2.slice(0,7)); // 's', from 0 to 1, but not including 1, so only character at 0
//console.log(str2.trim("  stringify  hello  jani  "))
console.log((str2 +"\n").repeat(3));


//str.trim() //removes (“trims”) spaces from the beginning and end of the string.
//str.repeat(n) //– repeats the string n times

//splice
let arr = ["I", "study", "JavaScript","hello","you"];
arr.splice(1, 3); // from index 1 remove 1 element
console.log( arr ); // ["I", "JavaScript"]

let ar = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
ar.splice(0, 3, "Let's", "dance");
console.log(ar.splice(0,3))
console.log( ar ) // now ["Let's", "dance", "right", "now"]

//splice returns the array of removed elements:
let arrr = ["I", "study", "JavaScript", "right", "now"];
// remove 2 first elements
let removed = arrr.splice(0, 2);
console.log( removed ); // "I", "study" <-- array of removed elements


//insert the elements without any removals. 
let r = ["I", "study", "JavaScript"];
// from index 1... we choosing study b/c study is in index 1
// delete 2.ele. study n js.
// then insert "complex" and "language"
r.splice(1, 2, "complex", "language");
console.log( r ); // "I", "study", "complex", "language", "JavaScript"

let a = ["t", "e", "s", "t"];
console.log( a.slice(1, 3) ); // ["e", "s"] (copy from 1 to 3)

let arrayy = [1, 2];
// create an array from: arr and [3,4]
console.log( arrayy.concat([3, 4],[9,6])); // 1,2,3,4
// create an array from: arr and [3,4] and [5,6]
( arrayy.concat([3, 4], [5, 6])); // 1,2,3,4,5,6
// create an array from: arr and [3,4], then add values 5 and 6
console.log( arrayy.concat([3, 4], 5, 6)); // 1,2,3,4,5,6






