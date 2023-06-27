// Write a function where given integer n, it returns the angles at each point of a star with n points.
// Hint: The sum of the angles at each point of a 5 pointed star is 180 degrees, and at a 6 pointed is 360 degrees.

function starAngles(n) {
    let evenOrOdd = n % 2 === 0 ? 360 : 180;

    if(n < 5){
        return "A star must have at least 5 points. Please enter a valid value for n."
    } else {
        return evenOrOdd / n;
    }
}



