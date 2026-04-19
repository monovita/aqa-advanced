const person = {
	firstName: 'Jane',
	lastName: 'Doe',
	age: 30,
};

person.email = 'jdoe@email.com';

delete person.age;

console.log(person);
