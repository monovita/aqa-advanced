const divide = (numerator, denominator) => {
	if (isNaN(numerator) || isNaN(denominator)) {
		throw new Error('Введіть числове значення');
	}
	if (denominator === 0) {
		throw new Error('Ділення на нуль недопустиме!');
	}
	return numerator / denominator;
};

try {
	const result = divide(12, 3);
	console.log(result);
} catch (error) {
	console.error('Сталася помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------------------');

try {
	const result = divide('test', 3);
	console.log(result);
} catch (error) {
	console.error('Сталася помилка:', error.message);
} finally {
	console.log('Робота завершена');
}

console.log('------------------------');

try {
	const result = divide(12, 0);
	console.log(result);
} catch (error) {
	console.error('Сталася помилка:', error.message);
} finally {
	console.log('Робота завершена');
}
