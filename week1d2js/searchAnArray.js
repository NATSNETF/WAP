//indexOf
//lastIndexOf
//include
//find
//findIndex
//filter


let users = [
    {id: 1, name: "marry"},
    {id: 2, name: "Pete"},
    {id: 3, name: "joy"}
    ];
    // returns array of the first two users
    let someUsers = users.filter(item => item.id < 2);
    console.log(someUsers.name); // 2

    console.log(users.sort((a,b)=> a-b));
    