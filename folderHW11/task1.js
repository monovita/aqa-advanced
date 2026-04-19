function txtInTime(text, time) {
	const timerId = setTimeout(() => {
		console.log(text);
	}, time);
	return timerId;
}

txtInTime('Txt in 5 seconds', 5000);
