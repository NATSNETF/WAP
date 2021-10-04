// const numbers=[1,5,18,2,77,108];
// numbers.filter(function(elements){
//     if(elements%2==0)
//     console.log(elements)
// });


// numbers.findIndex(function(elements,index){
//     if(elements%2==0)

//     console.log(elements,index)
// })
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths); // 5,7,6

// let len=["samrawi","nazrawi","nazi","samuel"];
// console.log(len.sort((a,b)=>a.length-b.length));

// let fruits=["banana","apple","pear"];

// function mapR(item,index){
//     return{index:index,lengthOf:item.length}
// }
// //console.log(fruits.map((item,index)=> index + item.length));
// console.log(fruits.map(function(item,index,array){
//     return{index:index,lengthOf:item.length};

// }))

// /////////////////////////////////////////
// //sort
// let arr = [ 1, 2, 15,0 ];
// // the method reorders the content of arr
// arr.sort((a,b)=>(a-b));
// console.log( arr ); //0 1,2,15

// //////////////////////////////////////////////////reduce
// let red = [1, 2, 3, 4, 5];
// let result = red.reduce(function (sum, current) { return sum + current; }, 0);
// let result2 = red.reduce((sum, current) => sum + current, 0);
// console.log(result); // 15
// console.log(result2); // 15



// let pro = [1, 2, 3, 4, 5];

// let res=pro.reduce((product,current)=>product * current,1);
// console.log(res)

// pro.max(function(item){
//     console.log(item);
// });










function reverseStr(str){
    const revWord = str.split("--");
    revWord.reverse();
    for(let word of revWord){
        console.log(word)
    }
}
console.log(reverseStr("Today, is, hot!!"))