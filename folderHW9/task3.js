const car1 = {
	brand: 'Porsche',
	model: '911 GT3 RS',
	year: 2026,
};

const car2 = {
	brand: 'Audi',
	model: 'Q9-L',
	owner: 2027,
};

const car3 = { ...car1, ...car2 };

console.log(car3);
