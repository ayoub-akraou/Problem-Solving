function numberToPower(number,power) {
    return power===0?1:Array(power).fill(number).reduce((a,b) => a*b);
}