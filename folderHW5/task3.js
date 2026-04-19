console.log(`
    Multiplication table by for loop
    `);

let numberFor = 4;

for (i = 1; i <= 10; i++) {
	let result = numberFor * i;
	console.log(`${numberFor} x ${i} = ${result}`);
}

console.log(`
    Multiplication table by while loop
    `);

let numberWhile = 2;
let i = 1;
while (i <= 10) {
	let result = numberWhile * i;
	console.log(`${numberWhile} x ${i} = ${result}`);
	i++;
}
