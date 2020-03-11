let arr = require('./array1000.js');
function bubbleSort(arr)
{
var swapped;
do {
swapped = false;
for (var i=0; i < arr.length-1; i++) {
if (arr[i] > arr[i+1]) {
var temp = arr[i];
arr[i] = arr[i+1];
arr[i+1] = temp;
swapped = true;
}
}
} while (swapped);
}
var start = new Date().getTime()
var sorted = bubbleSort(arr)
console.log(sorted);
var end = new Date().getTime()
var time = end - start
console.log("Time taken to sort: " + time + " milliseconds")