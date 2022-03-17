let firstVal, secondVal;

firstVal = 10;

secondVal = 5; 

// addition operator
let answer = firstVal + secondVal;

//different operator
answer = firstVal - secondVal;

// division operator
answer = firstVal / secondVal;

// remainder operator
answer = firstVal % secondVal;

// increment operator
firstVal++;

// decrement operator
secondVal--;

// addition assignment operator
firstVal += secondVal;

// substraction assignment operator
secondVal -= firstVal;

//division assignment operator
secondVal /= firstVal ;

//power assignment operator
firstVal **= 2;

firstVal = 50;
secondVal = '65';

answer = firstVal < secondVal;
answer = firstVal > secondVal;

answer = firstVal <= secondVal;
answer = firstVal >= secondVal - 15; //true
answer = firstVal === secondVal - 15; //true
answer = firstVal !== secondVal - 15; //false

console.log(`First value is now ${firstVal}, and second value is now ${secondVal} then answer is ${answer}`);