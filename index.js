// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Where do I Belong</h1>`;

/** TODO:
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.  The returned value should be a number.
 * For example, getIndex([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
 * Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like [3, 5, 20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
 
 function getIndexToIns(arr, num) {
   return num;
 }
 
 getIndexToIns([40, 60], 50);
 */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  // Using function expressions or arrow function expressions in the Array.prototype.sort() method, can sort the array by numbers instead of the default sort (which is by strings).
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));
