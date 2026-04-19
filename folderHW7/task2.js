const outputNumber = (num) => {
	if (num <= 0) return;
	console.log(num);
	outputNumber(num - 1);
};

outputNumber(5);
