const handleNum = (number, callbackEven, callbackOdd) => {
	const isEven = number % 2 === 0 ? callbackEven : callbackOdd;
	return isEven();
};

const handleEven = () => {
	console.log('number is even');
};
const handleOdd = () => {
	console.log('number is odd');
};

handleNum(2, handleEven, handleOdd);

console.log('------------------------');

handleNum(3, handleEven, handleOdd);
