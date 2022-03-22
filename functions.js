/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */
 function sumOdds(numbers) {
  // Your code here
 const oddNumbers= numbers.filter( number => number%2 !==0);
 const initialValue=0;
 const sumNumbers= oddNumbers.reduce( (previousValue, currentValue) => previousValue + currentValue,
 initialValue);
 return sumNumbers;
}
console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));

/**
* characterCount(string, c):
* - receives a string and a character
* - returns the number of times `c` occurs in the string
* - note: this has to be case-insensitive
*
* e.g.
* characterCount("Michael Stephenson", "e") -> 3
* characterCount("Character Count is clever", "c") -> 4
*
* Hint: You need to turn the string into an array first
* Another Hint: Use string methods to make it case-insensitive
*/
function characterCount(string, c) {
  // Your code here
  const stringInsensitive=string.toLowerCase() ;
  const cCharacterInsent = c.toLowerCase();
  const arrayCharacters=stringInsensitive.split('');
  const arrayofC=arrayCharacters.filter( Element => Element===cCharacterInsent);
  return arrayofC.length;
}
console.log(characterCount("Character Count is clever", "c"));


/**
 * largestIncrement(numbers):
 * - receives an array of numbers
 * - returns the largest difference between two consecutive numbers in the array
 * - see example below for clarification
 * - assume all differences are positive numbers
 * e.g.
 * largestIncrement([1, 3, 7, 9, 12]) -> 4
 * 3 - 1 = 2
 * 7 - 3 = 4
 * 9 - 7 = 2
 * 12 - 9 = 3
 * largest: 4
 *
 * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
 */
function largestIncrement(numbers) {

  // Your code here
  const arrayofDiff=numbers.slice(1).map((x,i) => numbers[i]-x);
  
    arrayofDiff.sort();
  const length= arrayofDiff.length;
  const largestDiff= arrayofDiff[length-1];
  return largestDiff;
}
console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]));

/**
 * afterX(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns an array of every number in `numbers` that occurs after `x`.
 *
 * - assume there are no duplicate numbers.
 *
 * e.g.
 * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
 * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
 */
function afterX(numbers, x) {
  // Your code here
  const result= numbers.splice(x, numbers.length);
  return result;

}
console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/**
 * abbreviate(firstName, lastName):
 * - receives a first name and a last name
 * - returns the initials in uppercase
 *
 * e.g.
 * abbreviate("Michael", "Singer") -> "MS"
 * abbreviate("jordan", "peterson") -> "JP"
 *
 * Hint: Use string method .toUpperCase()
 */
function abbreviate(firstName, lastName) {
  // Your code here
  const firstname=firstName.toUpperCase();
  const secondname=lastName.toUpperCase();
  const arrayFirstname = firstname.split('');
  const arraySecondname = secondname.split('');
  return arrayFirstname[0] + arraySecondname[0];
}
console.log(abbreviate("miss", "Stephane"));

/**
 * isUpperCase(string):
 * - receives a string
 * - returns true if the string is uppercase, false otherwise
 *
 * e.g.
 * isUpperCase("Mickey S") -> false
 * isUpperCase("JCREW") -> true
 *
 */
function isUpperCase(string) {
  // Your code here
  const upperstring=string.toUpperCase();
  return string===upperstring;

}

 console.log(isUpperCase("JCREW"));

/**
 * elementInArray(numbers, x):
 * - receives an array of numbers, and a number `x`.
 * - returns true if `x` is found in the array, false otherwise
 *
 * e.g.
 * elementInArray([5, 6, 7], 6) -> true
 * elementInArray([5, 6, 7], 8) -> false
 *
 */
function elementInArray(numbers, x) {
  // Your code here
 const newArray= numbers.filter(Element => Element=== x);
 if(newArray.length ===0) return false;
 else return true;
}
 console.log(elementInArray([5, 6, 7], 8));

module.exports = {
  sumOdds,
  characterCount,
  largestIncrement,
  afterX,
  abbreviate,
  isUpperCase,
  elementInArray,
};
