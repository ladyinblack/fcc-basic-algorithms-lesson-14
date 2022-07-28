## SOLUTIONS

### Alternate Solution 1
```js
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) 
      return i;
  }
  return arr.length;
}
```
### Code Explanation
- First I sort the array using `.sort(callbackFunction)` to sort it by lowest to highest, from left to right.
- Then I use a `for` loop to compare the items in the array starting from the smallest one.  When an item on the array is greater than the number we are comparing against, then we return the index.


### Alternate Solution 2
```js
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
```
### Code Explanation
- Count the number of entries that are smaller than the new value `num`.
- The new value would be inserted after these values.


### Alternate Solution 3
```js
function getIndexToIns(arr, num) {
  // sort and find right index
  let index = arr
      .sort((curr, next) => curr - next)
      .findIndex(currNum => num <= currNum);
  // Returns index or total length of arr 
  return index === -1 ? arr.length : index;
}
getIndexToIns([40, 60], 500);
```
### Code Explanation
- First sort the array in ascending order, this is currently done using array functions for minimal footprint.
- Once the array is sorted, we directly apply the `.findIndex()` where we are going to compare every element in the array until we find where `num <= currNum` - where the number we want to insert is less than or equal to the current number in the iteration.
- Then we use ternary operations to check whether we got an index returned or `-1`.  We only get `-1` when the index was not found, meaning when we get a false for all elements in the array, and for such case, it would mean that `num` should be inserted at the end of the list.  Hence, why we use `arr.length`.

### REFERENCE LINKS
- [`Array.findIndex()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Ternary Operator](http://forum.freecodecamp.com/t/javascript-ternary-operator/15973)


### Alternate Solution 4
```js
function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a, b) => a - b).indexOf(num);
}
getIndexToIns([1, 3, 4], 2);
```
### Code Explanation
- We use method-chaining to invoke one method after another to solve the problem in a single line.  First we create a new array with the contents of `arr` and `num` by using the `concat()` method.
- Then we use `sort()` with the callback **arrow function** `(a, b) => return a - b` to sort the numbers in ascending order.
- Lastly we return the position or index of `num` in the array with the `indexOf()` method.

### REFERENCE LINKS
- [Method chaining in JavaScript](https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html)
- [`concat()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example)
- [Arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

