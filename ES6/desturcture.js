const Person={
    name:"Mitali Kamble",
    age:19,
    email:"mitali123@gmail.com"
}

console.log(Person.name+" "+Person.email+" "+Person.age)
//Adding Object Destructure
const {name,age,email} =Person;
console.log(name+" "+age+" "+email)