// complete this js code
function Person(name, age) {
	Person.prototype.greet = `Hello, my name is ${name}, I am ${age} years old.`
}

function Employee(name, age, jobTitle) {
	Employee.prototype.__proto__ = Person.prototype;
	Employee.prototype.jobGreet = `Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`;
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
