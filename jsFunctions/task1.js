// Function declaration

function calculateAreaDeclaration(width, height) {
    return width * height;
}

console.log(calculateAreaDeclaration(5, 10));

// Function expression

const calculateAreaExpression = function(width, height) {
    return width * height;
}

console.log(calculateAreaExpression(10, 5));

// Arrow function

const calculateAreaArrow = (width, height) => width * height;

console.log(calculateAreaArrow(10, 5));