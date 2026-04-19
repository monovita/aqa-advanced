function checkOrder(available, ordered) {
	switch (true) {
		case available < ordered && ordered > 0:
			console.log('Your order is too large, we don’t have enough goods.');
			break;
		case ordered <= 0:
			console.log('Your order is empty');
			break;
		case available >= ordered && ordered > 0:
			console.log('Your order is accepted');
			break;
		default:
			console.log('Please enter valid numbers');
	}
}

checkOrder(10, 5);
