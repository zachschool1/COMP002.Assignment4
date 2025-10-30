// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

//the goal logic -> set a value to really high, i'll use 1000. if num1 is lower than that value, set value to num1. if num2 is lower than that value, set to that value. return lowest value

const min = (num1, num2) => {
    let lowestValue = 1000; //i know theres a way to set this value to basically infinite, but i didnt want to look that up.

    if (num1 < lowestValue) {
        lowestValue = num1;
    }

    if (num2 < lowestValue) {
        lowestValue = num2;
    }

    return lowestValue
};

console.log(min(4,299));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

const findCircumference = (radius) => {
    let pi = 3.14;

    return 2 * pi * radius;
};

console.log(findCircumference(5));




// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
