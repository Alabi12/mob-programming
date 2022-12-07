module.exports = function () {
  // write your code here
  // pseudo code
    // numbers from 1 to 100
    // loop through 1 to 100.
    // 3 or multiple of 3 return "fizz"
    // 5 or multiple of 5 return "buzz"
    // 3 and 5 or their multiples push "fizzbuzz" into the array.

    const ourArray = [];
    for (let i = 1; i <= 100; i++){
      if (i % 3 == 0 && i % 5 == 0){
        ourArray.push("FizzBuzz");
      }else if (i%3 == 0){
        ourArray.push("Fizz");
      }else if (i%5==0){
        ourArray.push("Buzz")
      }else{
        ourArray.push(i);
      }
    }
    return ourArray
}
