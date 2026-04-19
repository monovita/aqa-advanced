// function declaration
function rectangleAreaDeclaration(width, height) {
	let rectangleArea = width * height;
	return rectangleArea;
}

console.log(rectangleAreaDeclaration(5, 10));

// function expression
const rectangleAreaExpression = function (width, height) {
	return width * height;
};

console.log(rectangleAreaExpression(6, 10));

//arrow function

const rectangleAreaArrow = (width, height) => {
	return width * height;
};

console.log(rectangleAreaArrow(7, 10));
