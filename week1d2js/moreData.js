let ar=[1,5,16,3,18];
ar.forEach(function(index, item){
    console.log(index,item)

    
});
let students=[
{id:1,name:"eritrea"},
{id:2,name:"togo"},
{id:3,name:"kenya"},
{id:4,name:"tanzania"},
{id:5,name:"mombasa"},
{id:6,name:"angola"}];

let result=students.filter(function(item){
    return item.id<= 5;
});
console.log(result)
console.log(result.length)
//////////////////////////////////////////////////////indexOf

let arr = [1, 0, false];
console.log( arr.indexOf(0) ); // 1
console.log( arr.indexOf(false) ); // 2
console.log( arr.indexOf(null) ); // -1
console.log( arr.includes(1) ); // true

arr.forEach(function(item){//we can print all the elements using map and forEach 
    console.log(item);
});

////////////////////////////////////////////////////////////find

//Let’s find the one with id === 1:
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
    ];
    let user = users.find(item => item.id ===1);
    //console.log(user.name); // John


    let aree=users.findIndex(function(ite){
        return(ite.id===2)
        
    });
    console.log(aree.name);
    
    