// ///////////////////类型//////////////////////
// function greeter_t(person: string) {
//     return "Hello," + person;
// }

// let user_t = "Jane User";

// document.body.innerHTML = greeter(user_t);

// //////////////////接口////////////////////
// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function Greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user_i = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = Greeter(user_i);


// ///////////////////类型//////////////////////
// class Student {
//     fullName: string;
//     //在构造函数的参数上使用public等同于创建了同名的成员变量
//     constructor(public firstName, public middleInitial, public lastName) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }

// let student = new Student("Jane", "M.", "User");

// document.body.innerHTML = Greeter(student);