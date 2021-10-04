
//let item = document.getElementById('book')

let books = [
    {
    isbn: 123,
    title: 'book1',
    author: 'Naxa'
  },
  {
  isbn: 234,
  title: 'book2',
  author: 'Naxa gual mario'
}
]
 
  // Array  // push pop
  // object 
  books.publisher = 'naxa publication llc'
//   console.log(books)

  // find 1st true
 let arr = [6,1,2,3,4,2]
 let book = [{title: 'one', id: 1},{title: 'two', id: 2}, {title: 'three', id: 3}] 
 console.log(arr.filter(item=> item >2))
 console.log(books.sort((a,b)=> a.isbn-b.isbn))

 // == value === value & data type 2=='2'
 // Arry vs Object  => reference 
 // primitive data types ==> value
 let name = 'naxa'
 let name2 = name
 name ='simon'
 console.log(name)

 let bookTitle = ['Simon is a teacher in miu','Naxa is miu student', 'Abc is the best in the world...'] 
console.log(bookTitle.sort((a,b)=> a.length-b.length))

// this
let user = {
    name: "John",
    age: 30,
    sayHi: function() {
    // "this" is the "current object"
    alert(this.name);
    }
    };
     console.log(this.name)
    function ab(name){
        console.log(this)
        this.name =name
        'use strict'
 console.log(this)
    }
     let p1 = new ab('Naxa')
    // console.log(p1.name)
    // let p2 = new ab('simon')
    // console.log(p1.name)

