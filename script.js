// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
	Person.prototype.greet = function(){
		document.write(`Hello, my name is ${name}, I am ${age} years old.`);
	}
}

function Employee(name, age, jobTitle) {
	this.name = name;
	this.age = age;
	this.jobTitle = jobTitle;
	Employee.prototype.__proto__ = Person.prototype;
	Employee.prototype.jobGreet = function(){
		document.write(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`);
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
