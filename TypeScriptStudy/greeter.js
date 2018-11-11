///////////////////类型//////////////////////
function greeter_t(person) {
    return "Hello," + person;
}
var user_t = "Jane User";
document.body.innerHTML = greeter(user_t);
function Greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user_i = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = Greeter(user_i);
///////////////////类型//////////////////////
var Student = /** @class */ (function () {
    //在构造函数的参数上使用public等同于创建了同名的成员变量
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var student = new Student("Jane", "M.", "User");
document.body.innerHTML = Greeter(student);
