class Employee {
  constructor() {
    this.id = 101;
    this.empname = "Mitali";
  }
//   constructor(id,name){
//     this.id=id;
//     this.name=name;
//   }
  displayInfo() {
    console.log(this.id + " " + this.empname);
  }
}
let emp=new Employee(201, "sheetal");
emp.displayInfo()