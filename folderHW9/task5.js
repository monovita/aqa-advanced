const users = [
	{
		name: 'Jane',
		email: 'jane123@email.com',
		age: 25,
	},
	{
		name: 'Julie',
		email: 'julie123@email.com',
		age: 35,
	},
	{
		name: 'May',
		email: 'may123@email.com',
		age: 80,
	},
];

for (const individual of users) {
	console.log(individual);
}

console.log('---------------');

for (const { name, email, age } of users) {
	console.log(`Name: ${name}, email: ${email}, age: ${age}`);
}
