var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    return Employee;
}());
var emp = new Employee("Alice", 28, 7000);
console.log(emp);
